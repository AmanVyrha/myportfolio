# Content Image Structure

This directory contains all the images used in the various sections of the portfolio site.

## Folder Structure

- **social-activity/** - Images for the "Recent Social Media Activity" section
  - GitHub, LinkedIn, Twitter, Instagram, etc.

- **projects/** - Images for all project cards
  - ML Projects, Data Visualization, Analytics, etc.

- **experience/** - Images for education and professional experience
  - Job positions, academic institutions, certifications

- **adventures/** - Images for the adventure locations and travel
  - Dublin, India, conferences, etc.

- **skills/** - Images for technical skills
  - Programming, Data Analysis, Visualization, etc.

- **recommendations/** - Images for specializations and recommendations
  - Analytics, Business Intelligence, etc.

## Usage

1. Place your images in the appropriate folders
2. Use the following path format in your code:
   ```
   /assets/content/[folder]/[image-name].[extension]
   ```
   
   Example:
   ```
   /assets/content/projects/ml-prediction.jpg
   ```

3. Recommended image formats:
   - JPEG for photos (.jpg)
   - PNG for graphics with transparency (.png)
   - WebP for best performance (.webp)
   - GIF for simple animations (.gif)

4. Recommended image dimensions:
   - Card thumbnails: 640x360px (16:9 ratio)
   - Larger preview images: 1280x720px (16:9 ratio)

## Example

Replace:
```javascript
image: 'https://i.imgur.com/Q5MzjOk.jpg'
```

With:
```javascript
image: '/assets/content/projects/ml-prediction.jpg'
```
