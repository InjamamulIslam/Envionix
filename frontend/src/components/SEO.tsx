import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
}

export function SEO({
    title,
    description,
    keywords,
    image,
    url,
    type = 'website'
}: SEOProps) {
    const siteTitle = "Envionix Labs";
    const defaultDescription = "Empowering farmers and industries with portable, real-time environmental testing. Instant soil and water analysis for smart farming and compliance.";
    const defaultKeywords = "Smart Farming, Precision Agriculture, Soil Testing, Water Quality Analysis, Farm Environmental Monitoring, IoT for Agriculture, Toxic Element Detection, Portable Lab, Envionix Labs";
    const siteUrl = "https://envionix.com"; // Replace with actual domain
    const defaultImage = "/og-image.jpg"; // Should be added to public folder

    const metaTitle = title ? `${title} | Envionix Labs` : siteTitle;
    const metaDescription = description || defaultDescription;
    const metaKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;
    const metaImage = image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`;
    const metaUrl = url ? `${siteUrl}${url}` : siteUrl;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <link rel="canonical" href={metaUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={metaUrl} />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />
        </Helmet>
    );
}
