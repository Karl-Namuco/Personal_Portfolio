# Portfolio assets

Put image files in the folders below. These are served from `/assets/...` in the site.

- `profile/profile-photo.jpg` — hero display photo (square or portrait works best).
- `projects/` — project preview images. Use `mission-lokal.jpg`, `grainflow.jpg`, `kni-travels.jpg`, and `waste-management-audit.jpg`; the project previews use these paths and fall back to CSS mockups until an image is present.
- `certificates/` — certificate scans or screenshots. Add their titles, issuers, image paths, and optional credential links to `src/data/certificates.js`.
  - `zarate-hospital-work-immersion.jpg` — E. Zarate Hospital work immersion certificate.

Certificate entry example:

```js
{
  title: 'Certificate title',
  issuer: 'Issuing organization',
  date: 'Month Year',
  image: '/assets/certificates/certificate-file.jpg',
  imageAlt: 'Certificate title issued by organization',
  credentialUrl: '',
}
```

Use descriptive filenames and only add credentials you have actually earned.
