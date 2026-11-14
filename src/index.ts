/**
 * @sudobility/characterbuilder_ui — reusable CharacterBuilder UI.
 *
 * The characterbuilder-specific presentational layer extracted from
 * `characterbuilder_app`: the FaceSpec editor form, the bespoke trait-icon
 * line-art set, portrait/variation/full-body panels, the ancestry picker, plus
 * the localized routing/i18n helpers and breadcrumb plumbing the app chrome
 * uses. Modeled on `@sudobility/sudojo_ui`.
 *
 * Generic app-shell/auth pieces live in `@sudobility/building_blocks`, not here.
 */

// FaceSpec editor
export { FaceSpecForm, FaceSpecGroupCard } from './components/FaceSpecForm';

// Portrait / generation panels
export { ImageTile } from './components/ImageTile';
export { FullBodyPanel } from './components/FullBodyPanel';
export { VariationPanel } from './components/VariationPanel';

// Ancestry
export { AncestryPicker, pathLabel, pathForAncestry } from './components/AncestryPicker';

// Trait icons (bespoke SVG line-art)
export { TraitIcon, TraitOption, hasTraitIcon } from './components/trait-icons';

// Localized routing / links
export { LocalizedLink } from './components/layout/LocalizedLink';
export { LinkWrapper } from './components/layout/LinkWrapper';
export { LocalizedNavigate } from './components/routing/LocalizedNavigate';
export { useLocalizedNavigate } from './hooks/useLocalizedNavigate';

// Breadcrumbs (URL-derived)
export { useBreadcrumbs } from './hooks/useBreadcrumbs';
export { BreadcrumbBuilder } from './utils/BreadcrumbBuilder';

// Error boundary
export { ErrorBoundary } from './components/shell/ErrorBoundary';

// Language configuration
export {
  SUPPORTED_LANGUAGES,
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  LANGUAGE_CONFIGS,
  LANGUAGE_NAMES,
  isLanguageSupported,
  type SupportedLanguage,
} from './config/languages';

// Image helpers
export { fileToDownscaledDataUrl, blobToDownscaledDataUrl } from './lib/image';
export { downloadImage } from './lib/download';
