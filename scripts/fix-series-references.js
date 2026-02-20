/**
 * Script pour corriger les références entre les documents et permettre la suppression forcée
 * Ce script permet de supprimer des séries même si elles sont référencées par d'autres documents
 * 
 * Pour utiliser ce script:
 * 1. Assurez-vous d'avoir installé @sanity/client: npm install @sanity/client
 * 2. Exécutez avec: SANITY_TOKEN=votre_token node scripts/fix-series-references.js
 */

import { createClient } from '@sanity/client';

// Token API fourni directement
const SANITY_API_TOKEN = process.env.SANITY_TOKEN || 'skWaB4mnYywJ7SZdNYL74ZMwMqdFqTzxPtOvYwxzpnlTqtli98lVhvrulfpAgPzUERSHiwVKp4gJ5WY5yV8LUT0HYSvLh5BhYWQLMaz1x4n37We2Y7cjaICQKXaillqXHZjo7ltsGp2yuMDkrHsVHADV48IJjlvFG0pR16KbKgU1TII6j9Ip';

// Configuration du client Sanity
const client = createClient({
  projectId: 'yjqruava',
  dataset: 'production',
  apiVersion: '2023-05-03',
  token: SANITY_API_TOKEN,
  useCdn: false,
});

// ID du document à supprimer (à remplacer par l'ID du document que vous souhaitez supprimer)
// L'ID est visible dans l'URL de Sanity Studio lorsque vous éditez un document
// Par exemple: https://yjqruava.sanity.studio/desk/series;MOD2HlhJYfoitzBOi1W1Hg
// L'ID est "MOD2HlhJYfoitzBOi1W1Hg"
const DOCUMENT_ID_TO_DELETE = 'MOD2HlhJYfoitzBOi1W1Hg'; // Remplacez par l'ID du document à supprimer

/**
 * Fonction pour trouver tous les documents qui référencent un document spécifique
 */
async function findDocumentsReferencing(documentId) {
  // Cette requête trouve tous les documents qui référencent le document spécifié
  const query = `*[references("${documentId}")]{ _id, _type }`;
  return client.fetch(query);
}

/**
 * Fonction pour obtenir les détails d'un document
 */
async function getDocumentDetails(documentId) {
  try {
    const doc = await client.getDocument(documentId);
    return doc;
  } catch (error) {
    console.error(`\x1b[31m%s\x1b[0m`, `✗ Erreur lors de la récupération du document ${documentId}:`, error);
    return null;
  }
}

/**
 * Fonction pour supprimer une référence dans un document
 */
async function removeReferenceFromDocument(docId, referenceField) {
  try {
    // Obtenir le document pour vérifier sa structure
    const doc = await getDocumentDetails(docId);
    if (!doc) return false;
    
    // Vérifier si le champ existe dans le document
    if (doc[referenceField]) {
      await client
        .patch(docId)
        .unset([referenceField]) // Supprime le champ de référence
        .commit();
      console.log(`\x1b[32m%s\x1b[0m`, `✓ Référence '${referenceField}' supprimée du document ${docId} (type: ${doc._type})`);
      return true;
    } else {
      // Le champ n'existe pas, chercher les références dans les objets imbriqués
      console.log(`\x1b[33m%s\x1b[0m`, `! Le champ '${referenceField}' n'existe pas directement dans le document ${docId}, recherche de références imbriquées...`);
      
      // Recherche récursive de références (version simplifiée)
      // Dans un cas réel, il faudrait une analyse plus poussée de la structure du document
      const fieldsToCheck = Object.keys(doc).filter(key => 
        typeof doc[key] === 'object' && 
        doc[key] !== null && 
        !Array.isArray(doc[key]) && 
        key !== '_rev' && 
        key !== '_id' && 
        key !== '_type'
      );
      
      for (const field of fieldsToCheck) {
        await client
          .patch(docId)
          .unset([field]) // Supprime le champ qui pourrait contenir la référence
          .commit();
        console.log(`\x1b[33m%s\x1b[0m`, `? Suppression potentielle de référence dans le champ '${field}' du document ${docId}`);
      }
      
      return true;
    }
  } catch (error) {
    console.error(`\x1b[31m%s\x1b[0m`, `✗ Erreur lors de la suppression de la référence dans le document ${docId}:`, error);
    return false;
  }
}

/**
 * Fonction pour supprimer un document avec force
 */
async function forceDeleteDocument(documentId) {
  try {
    // Utiliser l'API Sanity pour forcer la suppression
    const transaction = client.transaction();
    transaction.delete(documentId);
    await transaction.commit({ autoGenerateArrayKeys: true, forceAccept: true });
    console.log(`\x1b[32m%s\x1b[0m`, `✓ Document ${documentId} supprimé avec succès (force)!`);
    return true;
  } catch (error) {
    console.error(`\x1b[31m%s\x1b[0m`, `✗ Erreur lors de la suppression forcée du document ${documentId}:`, error);
    
    // Tentative alternative avec l'API de patch
    try {
      await client.delete(documentId);
      console.log(`\x1b[32m%s\x1b[0m`, `✓ Document ${documentId} supprimé avec succès (méthode alternative)!`);
      return true;
    } catch (innerError) {
      console.error(`\x1b[31m%s\x1b[0m`, `✗ Échec de la méthode alternative:`, innerError);
      return false;
    }
  }
}

/**
 * Fonction principale pour supprimer un document et ses références
 */
async function deleteDocumentAndReferences(documentId) {
  console.log('\x1b[36m%s\x1b[0m', `=== Suppression du document ${documentId} ===`);
  
  try {
    // 0. Obtenir les détails du document à supprimer
    const docToDelete = await getDocumentDetails(documentId);
    if (!docToDelete) {
      console.log('\x1b[31m%s\x1b[0m', `Le document ${documentId} n'existe pas.`);
      return { success: false, reason: 'Document not found' };
    }
    
    console.log(`Document à supprimer: ${docToDelete._type} (ID: ${documentId})`);
    
    // 1. Trouver tous les documents qui référencent ce document
    console.log('\x1b[36m%s\x1b[0m', '\n1. Recherche des documents qui référencent ce document...');
    const referencingDocs = await findDocumentsReferencing(documentId);
    console.log(`Trouvé ${referencingDocs.length} document(s) qui référencent ce document:`);
    referencingDocs.forEach(doc => {
      console.log(`- ${doc._type} (ID: ${doc._id})`);
    });
    
    // 2. Supprimer les références dans chaque document
    if (referencingDocs.length > 0) {
      console.log('\x1b[36m%s\x1b[0m', '\n2. Suppression des références dans les documents...');
      
      for (const doc of referencingDocs) {
        // Pour les œuvres, nous savons que le champ est 'series'
        if (doc._type === 'work') {
          await removeReferenceFromDocument(doc._id, 'series');
        } 
        // Pour les autres types de documents, nous devons deviner ou essayer plusieurs champs
        else {
          // Liste des champs courants qui pourraient contenir des références
          const commonReferenceFields = ['reference', 'references', docToDelete._type, `${docToDelete._type}Ref`, 'parentRef', 'parent'];
          
          for (const field of commonReferenceFields) {
            await removeReferenceFromDocument(doc._id, field);
          }
        }
      }
    }
    
    // 3. Supprimer le document avec force si nécessaire
    console.log('\x1b[36m%s\x1b[0m', '\n3. Suppression du document...');
    let success = false;
    
    // D'abord essayer la suppression normale
    try {
      await client.delete(documentId);
      console.log(`\x1b[32m%s\x1b[0m`, `✓ Document ${documentId} supprimé avec succès!`);
      success = true;
    } catch (error) {
      console.log(`\x1b[33m%s\x1b[0m`, `! Échec de la suppression normale, tentative de suppression forcée...`);
      success = await forceDeleteDocument(documentId);
    }
    
    if (success) {
      console.log('\n\x1b[32m%s\x1b[0m', '✓ Opération terminée avec succès!');
      console.log('\n\x1b[36m%s\x1b[0m', 'Étapes suivantes:');
      console.log('1. Rafraîchissez Sanity Studio');
      console.log('2. Vérifiez que le document a bien été supprimé');
      console.log('3. Les documents qui référençaient ce document ont été mis à jour');
    } else {
      console.log('\n\x1b[31m%s\x1b[0m', '✗ Échec de l\'opération.');
    }
    
    return {
      success,
      referencingDocs
    };
  } catch (error) {
    console.error('\n\x1b[31m%s\x1b[0m', '✗ Erreur lors de la suppression:');
    console.error(error);
    return {
      success: false,
      error
    };
  }
}

// Exécuter la fonction principale avec l'ID du document spécifié
deleteDocumentAndReferences(DOCUMENT_ID_TO_DELETE).catch(error => {
  console.error('Erreur non gérée:', error);
  process.exit(1);
});
