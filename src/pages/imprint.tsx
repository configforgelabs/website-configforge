import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Translate, { translate } from '@docusaurus/Translate';

export default function ImprintPage() {
    const { siteConfig, i18n } = useDocusaurusContext();
    const isGerman = i18n.currentLocale === 'de';

    return (
        <Layout
            title={translate({
                id: 'imprint.title',
                message: isGerman ? 'Impressum' : 'Imprint',
            })}
            description={translate({
                id: 'imprint.description',
                message: isGerman ? 'Impressum für ConfigForge' : 'Imprint for ConfigForge',
            })}
        >
            <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-8">
                        <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                            {isGerman ? "Impressum" : "Imprint"}
                        </h1>
                    </div>

                    <div className="space-y-6">
                        {isGerman ? (
                            <>
                                {/* Section 1 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-3 border-b-2 border-blue-500">
                                        Angaben gemäß § 5 TMG
                                    </h2>
                                    <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-6">
                                        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                                            <strong>Tobias Schüle</strong><br />
                                            Opsora<br />
                                            E-Mail: <a href="mailto:tobias@opsora.io" className="text-blue-600 dark:text-blue-400 hover:underline">tobias@opsora.io</a>
                                        </p>
                                    </div>
                                </div>

                                {/* Section 2 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-3 border-b-2 border-blue-500">
                                        Geschäftsadresse
                                    </h2>
                                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border-l-4 border-blue-500">
                                        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                                            <strong>Opsora LLC</strong><br />
                                            7901 4th St N STE 300<br />
                                            St. Petersburg, FL 33702<br />
                                            USA
                                        </p>
                                    </div>
                                </div>

                                {/* Section 3 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-3 border-b-2 border-blue-500">
                                        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                                    </h2>
                                    <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-6">
                                        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                                            <strong>Tobias Schüle</strong><br />
                                            E-Mail: <a href="mailto:tobias@opsora.io" className="text-blue-600 dark:text-blue-400 hover:underline">tobias@opsora.io</a>
                                        </p>
                                    </div>
                                </div>

                                {/* Section 4 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-500">
                                        Haftungsausschluss
                                    </h2>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Haftung für Inhalte</h3>
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Haftung für Links</h3>
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 5 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-3 border-b-2 border-blue-500">
                                        Urheberrecht
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                                    </p>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* English Version */}
                                {/* Section 1 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-3 border-b-2 border-blue-500">
                                        Legal Information
                                    </h2>
                                    <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-6">
                                        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                                            <strong>Tobias Schüle</strong><br />
                                            Opsora<br />
                                            Email: <a href="mailto:tobias@opsora.io" className="text-blue-600 dark:text-blue-400 hover:underline">tobias@opsora.io</a>
                                        </p>
                                    </div>
                                </div>

                                {/* Section 2 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-3 border-b-2 border-blue-500">
                                        Business Address
                                    </h2>
                                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border-l-4 border-blue-500">
                                        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                                            <strong>Opsora LLC</strong><br />
                                            7901 4th St N STE 300<br />
                                            St. Petersburg, FL 33702<br />
                                            USA
                                        </p>
                                    </div>
                                </div>

                                {/* Section 3 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-3 border-b-2 border-blue-500">
                                        Responsible for Content
                                    </h2>
                                    <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-6">
                                        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                                            <strong>Tobias Schüle</strong><br />
                                            Email: <a href="mailto:tobias@opsora.io" className="text-blue-600 dark:text-blue-400 hover:underline">tobias@opsora.io</a>
                                        </p>
                                    </div>
                                </div>

                                {/* Section 4 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-3 border-b-2 border-blue-500">
                                        Disclaimer
                                    </h2>
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Liability for Content</h3>
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                The contents of our pages have been created with great care. However, we cannot guarantee the accuracy, completeness, and timeliness of the content.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Liability for Links</h3>
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                Our offer contains links to external third-party websites, over whose contents we have no influence. Therefore, we cannot assume any liability for these external contents.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 5 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-3 border-b-2 border-blue-500">
                                        Copyright
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        The content and works created by the site operators on these pages are subject to German copyright law.
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
