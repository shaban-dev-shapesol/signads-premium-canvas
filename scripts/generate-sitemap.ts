import { writeFileSync, statSync } from 'fs';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

// Base URL for your site
const BASE_URL = 'https://signad.co.uk';

// Route configuration with file paths for timestamp checking
interface RouteConfig {
  path: string;
  filePath?: string; // Optional: path to source file for timestamp
}

const routes: RouteConfig[] = [
  // Main Pages
  { path: '/', filePath: 'src/pages/Index.tsx' },
  { path: '/about', filePath: 'src/pages/About.tsx' },
  { path: '/services', filePath: 'src/pages/Services.tsx' },
  { path: '/portfolio', filePath: 'src/pages/Portfolio.tsx' },
  { path: '/industries', filePath: 'src/pages/Industries.tsx' },
  { path: '/contact', filePath: 'src/pages/Contact.tsx' },

  // Service Category Pages
  { path: '/services/exterior-signs', filePath: 'src/pages/services/ExteriorSigns.tsx' },
  { path: '/services/interior-signs', filePath: 'src/pages/services/InteriorSigns.tsx' },
  { path: '/services/print-signs', filePath: 'src/pages/services/PrintSigns.tsx' },
  { path: '/services/light-boxes', filePath: 'src/pages/services/LightBoxes.tsx' },
  { path: '/services/promotional-signs', filePath: 'src/pages/services/PromotionalSigns.tsx' },
  { path: '/services/digital-signage', filePath: 'src/pages/services/DigitalSignage.tsx' },
  { path: '/services/exhibition-display', filePath: 'src/pages/services/ExhibitionDisplay.tsx' },
  { path: '/services/vehicle-graphics', filePath: 'src/pages/services/VehicleGraphics.tsx' },

  // Exterior Signs Sub-services
  { path: '/services/exterior-signs/built-up-3d-letters', filePath: 'src/pages/services/exterior/BuiltUp3DLetters.tsx' },
  { path: '/services/exterior-signs/fascia-sign-tray', filePath: 'src/pages/services/exterior/FasciaSignTray.tsx' },
  { path: '/services/exterior-signs/flex-face-lightbox', filePath: 'src/pages/services/exterior/FlexFaceLightBox.tsx' },
  { path: '/services/exterior-signs/projection-sign', filePath: 'src/pages/services/exterior/ProjectionSign.tsx' },
  { path: '/services/exterior-signs/totem-sign', filePath: 'src/pages/services/exterior/TotemSign.tsx' },
  { path: '/services/exterior-signs/site-hoarding-boards', filePath: 'src/pages/services/exterior/SiteHoardingBoards.tsx' },
  { path: '/services/exterior-signs/led-circular-signs', filePath: 'src/pages/services/exterior/LEDCircularSigns.tsx' },
  { path: '/services/exterior-signs/shop-front-acm', filePath: 'src/pages/services/exterior/ShopFrontACM.tsx' },

  // Interior Signs Sub-services
  { path: '/services/interior-signs/reception-signs', filePath: 'src/pages/services/interior/ReceptionSigns.tsx' },
  { path: '/services/interior-signs/neon-signs', filePath: 'src/pages/services/interior/NeonSigns.tsx' },
  { path: '/services/interior-signs/light-boxes', filePath: 'src/pages/services/interior/OfficeLightBoxes.tsx' },
  { path: '/services/interior-signs/office-wall-graphics', filePath: 'src/pages/services/interior/OfficeWallGraphics.tsx' },
  { path: '/services/interior-signs/window-frosting', filePath: 'src/pages/services/interior/WindowFrosting.tsx' },

  // Digital Signage Sub-services
  { path: '/services/digital-signage/outdoor-digital-signs', filePath: 'src/pages/services/digital/OutdoorDigitalSigns.tsx' },
  { path: '/services/digital-signage/indoor-digital-signage', filePath: 'src/pages/services/digital/IndoorDigitalSignage.tsx' },
  { path: '/services/digital-signage/digital-takeaway-menu', filePath: 'src/pages/services/digital/DigitalTakeawayMenu.tsx' },
  { path: '/services/digital-signage/shop-window-display', filePath: 'src/pages/services/digital/ShopWindowDisplay.tsx' },

  // Print Signs Sub-services
  { path: '/services/print-signs/banner-printing', filePath: 'src/pages/services/print/BannerPrinting.tsx' },
  { path: '/services/print-signs/floor-graphics', filePath: 'src/pages/services/print/FloorGraphics.tsx' },
  { path: '/services/print-signs/window-graphics', filePath: 'src/pages/services/print/WindowGraphics.tsx' },
  { path: '/services/print-signs/wall-art', filePath: 'src/pages/services/print/WallArt.tsx' },
  { path: '/services/print-signs/printed-tray', filePath: 'src/pages/services/print/PrintedTray.tsx' },
  { path: '/services/print-signs/vinyl-lettering', filePath: 'src/pages/services/print/VinylLettering.tsx' },
  { path: '/services/print-signs/bespoke-ceiling', filePath: 'src/pages/services/print/BespokeCeiling.tsx' },
  { path: '/services/print-signs/pvc-banners', filePath: 'src/pages/services/print/PVCBanners.tsx' },

  // Vehicle Graphics Sub-services
  { path: '/services/vehicle-graphics/van-wrap', filePath: 'src/pages/services/vehicle/VanWrap.tsx' },
  { path: '/services/vehicle-graphics/van-lettering', filePath: 'src/pages/services/vehicle/VanLettering.tsx' },
  { path: '/services/vehicle-graphics/truck-wrap', filePath: 'src/pages/services/vehicle/TruckWrap.tsx' },
  { path: '/services/vehicle-graphics/food-truck-wrap', filePath: 'src/pages/services/vehicle/FoodTruckWrap.tsx' },

  // Exhibition Display Sub-services
  { path: '/services/exhibition-display/pop-up-banners', filePath: 'src/pages/services/exhibition/PopUpBanners.tsx' },
  { path: '/services/exhibition-display/standard-exhibition', filePath: 'src/pages/services/exhibition/StandardExhibitionDisplay.tsx' },
  { path: '/services/exhibition-display/bespoke-exhibition', filePath: 'src/pages/services/exhibition/BespokeExhibitionDisplay.tsx' },

  // Lightbox Sub-services
  { path: '/services/light-boxes/acrylic-lightbox', filePath: 'src/pages/services/lightbox/AcrylicLightbox.tsx' },
  { path: '/services/light-boxes/promotional-lightbox', filePath: 'src/pages/services/lightbox/PromotionalLightbox.tsx' },

  // Promotional Signs Sub-services
  { path: '/services/promotional-signs/custom-flags', filePath: 'src/pages/services/promotional/CustomFlags.tsx' },
  { path: '/services/promotional-signs/pavement-sign', filePath: 'src/pages/services/promotional/PavementSign.tsx' },
  { path: '/services/promotional-signs/swinger-a-boards', filePath: 'src/pages/services/promotional/SwingerABoards.tsx' },
];

/**
 * Get the last modified date of a file
 */
function getFileLastModified(filePath: string): Date | null {
  try {
    const fullPath = join(resolve(__dirname, '..'), filePath);
    const stats = statSync(fullPath);
    return stats.mtime;
  } catch (error) {
    // File doesn't exist or can't be accessed
    return null;
  }
}

/**
 * Format date to ISO 8601 format (YYYY-MM-DD)
 */
function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

/**
 * Generate sitemap XML
 * Following Google Search Console SEO best practices:
 * - Only <loc> tags (no unreliable timestamps)
 * - No <changefreq> or <priority> (Google ignores them)
 * - Clean, minimal, production-ready
 */
function generateSitemap(): string {
  const urlEntries = routes.map((route) => {
    const url = `${BASE_URL}${route.path}`;
    return `  <url>\n    <loc>${url}</loc>\n  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries.join('\n')}
</urlset>`;
}

/**
 * Main execution
 */
function main() {
  try {
    const sitemap = generateSitemap();
    const outputPath = join(resolve(__dirname, '..'), 'public', 'sitemap.xml');
    writeFileSync(outputPath, sitemap, 'utf-8');
    console.log(`✅ Sitemap generated successfully at ${outputPath}`);
    console.log(`📄 Total URLs: ${routes.length}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

main();
