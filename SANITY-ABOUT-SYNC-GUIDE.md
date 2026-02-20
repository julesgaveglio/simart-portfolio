# SiemArt About Page - Sanity Content Synchronization Guide

This guide provides detailed instructions for setting up and managing the About page content in Sanity Studio for SiemArt's portfolio website.

## Table of Contents
1. [Accessing Sanity Studio](#accessing-sanity-studio)
2. [About Page Structure](#about-page-structure)
3. [Adding Content](#adding-content)
4. [Sample Content](#sample-content)
5. [Image Guidelines](#image-guidelines)
6. [Multilingual Content](#multilingual-content)
7. [Troubleshooting](#troubleshooting)

## Accessing Sanity Studio

1. Navigate to your Sanity Studio URL (typically `https://[your-project-id].sanity.studio/`)
2. Log in with your credentials
3. Select the "About" document from the content list

## About Page Structure

The About page consists of the following fields:

| Field Name | Type | Description | Required |
|------------|------|-------------|----------|
| name | String | Artist's full name | Yes |
| profileImage | Image | Portrait photo of the artist | No |
| monumentalWorkImage | Image | Photo of artist with monumental work | No |
| biographyEN | Rich Text | Artist biography in English | Yes |
| biographyNL | Rich Text | Artist biography in Dutch | Yes |
| birthPlace | String | Artist's place of birth | No |
| availability | String | Availability information | No |
| acquisitionNote | String | Note about acquisition inquiries | No |
| email | String | Contact email | No |
| instagram | URL | Instagram profile URL | No |

## Adding Content

### Text Content

1. Navigate to the "About" document in Sanity Studio
2. Fill in the basic information fields:
   - **name**: Enter the artist's full name
   - **birthPlace**: Enter birth location information
   - **availability**: Enter availability information
   - **acquisitionNote**: Enter note about acquisition inquiries
   - **email**: Enter contact email
   - **instagram**: Enter full Instagram URL (including https://)

### Rich Text Content

For biography fields (biographyEN and biographyNL):

1. Use the rich text editor to format text
2. Keep paragraphs concise and focused
3. Use formatting sparingly for emphasis
4. Ensure both language versions convey the same information

### Images

1. **Profile Image**:
   - Upload a high-quality portrait photo
   - Recommended aspect ratio: 3:4
   - Minimum resolution: 1200x1600px

2. **Monumental Work Image**:
   - Upload a photo showing the artist with monumental work
   - Recommended aspect ratio: 16:9 or 3:2
   - Minimum resolution: 1920x1080px

3. For both images:
   - Use the hotspot feature to control focus points for different screen sizes
   - Add alt text for accessibility

## Sample Content

### English Biography
```
Simone Roodselaar (SiemArt) explores how inner expectation shapes reality through abstract painting. Her monumental, layered works exist as visual fields in which transformation and awareness can emerge.

Through her distinctive approach to color, texture, and composition, Roodselaar creates immersive experiences that invite viewers to engage with their own perceptions and emotions. Each piece serves as a meditation on the relationship between internal landscapes and external expression.

Her work has been exhibited internationally and is held in private collections across Europe, North America, and Asia.
```

### Dutch Biography
```
Simone Roodselaar (SiemArt) onderzoekt hoe innerlijke verwachting de realiteit vormt door middel van abstracte schilderkunst. Haar monumentale, gelaagde werken bestaan als visuele velden waarin transformatie en bewustwording kunnen ontstaan.

Door haar kenmerkende benadering van kleur, textuur en compositie creëert Roodselaar meeslepende ervaringen die kijkers uitnodigen om zich bezig te houden met hun eigen percepties en emoties. Elk stuk dient als een meditatie over de relatie tussen interne landschappen en externe expressie.

Haar werk is internationaal geëxposeerd en bevindt zich in privécollecties in Europa, Noord-Amerika en Azië.
```

### Other Fields
- **Name**: Simone Roodselaar
- **Birth Place**: Born in The Netherlands
- **Availability**: Works available internationally
- **Acquisition Note**: For acquisition inquiries and available works, please get in touch.
- **Email**: info@siemart.com
- **Instagram**: https://www.instagram.com/siemart

## Image Guidelines

### Visual Style
- Use high-contrast, professional photography
- White or neutral backgrounds preferred
- Ensure good lighting that highlights the artwork details
- For the monumental work image, show scale and context

### Technical Requirements
- File formats: JPG or PNG
- Color space: sRGB
- Maximum file size: 5MB per image
- Optimize for web without losing quality

## Multilingual Content

The website supports both English and Dutch content. Ensure that:

1. Both language versions are complete and up-to-date
2. Translations maintain the same tone and message
3. Specialized art terms are correctly translated
4. Text length is similar between languages to maintain design consistency

## Troubleshooting

### Common Issues

1. **Images not displaying**:
   - Check that the image was properly uploaded to Sanity
   - Verify the image reference is correct
   - Ensure the image format is supported

2. **Rich text formatting issues**:
   - Use simple formatting (bold, italic, paragraphs)
   - Avoid complex structures like tables or nested lists

3. **Content not updating on the website**:
   - Check that you've published your changes in Sanity
   - The website may have caching - wait a few minutes or clear cache
   - Verify that the GROQ queries are fetching the correct fields

### Getting Help

If you encounter issues with Sanity content management:

1. Check the Sanity documentation at https://www.sanity.io/docs
2. Contact your website developer for technical assistance
3. For content strategy questions, consult with your marketing team

---

*Last updated: February 20, 2026*
