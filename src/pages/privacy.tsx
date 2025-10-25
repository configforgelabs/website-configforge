import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Translate, { translate } from '@docusaurus/Translate';

export default function PrivacyPage() {
    const { siteConfig, i18n } = useDocusaurusContext();
    const isGerman = i18n.currentLocale === 'de';

    return (
        <Layout
            title={translate({
                id: 'privacy.title',
                message: isGerman ? 'Datenschutzerklärung' : 'Privacy Policy',
            })}
            description={translate({
                id: 'privacy.description',
                message: isGerman ? 'Datenschutzerklärung für ConfigForge' : 'Privacy Policy for ConfigForge',
            })}
        >
            <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 mb-8">
                        <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {isGerman ? "Datenschutzerklärung" : "Privacy Policy"}
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            {isGerman ? "Letzte Aktualisierung: 17. Oktober 2025" : "Last updated: October 17, 2025"}
                        </p>
                    </div>

                    <div className="space-y-8">
                        {isGerman ? (
                            <div className="max-w-4xl mx-auto space-y-6">
                                {/* Section 1 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                                        1. Verantwortlicher und Datenschutzbeauftragter
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                                    </p>
                                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 border-l-4 border-blue-500">
                                        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                                            <strong>Tobias Schüle</strong><br />
                                            Opsora<br />
                                            Opsora LLC<br />
                                            7901 4th St N STE 300<br />
                                            St. Petersburg, FL 33702<br />
                                            USA<br />
                                            E-Mail: <a href="mailto:tobias@opsora.io" className="text-blue-600 dark:text-blue-400 hover:underline">tobias@opsora.io</a>
                                        </p>
                                    </div>
                                </div>

                                {/* Section 2 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
                                        2. Umfang der Datenverarbeitung
                                    </h2>

                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                                2.1 Zugriffsdaten und Hosting
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                                Bei jedem Zugriff auf unsere Website werden automatisch Informationen erfasst, die Ihr Browser an unseren Server übermittelt (sogenannte Server-Logfiles). Dies umfasst:
                                            </p>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                                                <li>IP-Adresse des zugreifenden Rechners</li>
                                                <li>Datum und Uhrzeit des Zugriffs</li>
                                                <li>Name und URL der abgerufenen Datei</li>
                                                <li>Übertragene Datenmenge</li>
                                                <li>Meldung über erfolgreichen Abruf (HTTP-Statuscode)</li>
                                                <li>Browser-Typ und -Version</li>
                                                <li>Betriebssystem</li>
                                                <li>Referrer-URL (zuvor besuchte Seite)</li>
                                            </ul>
                                            <p className="text-gray-700 dark:text-gray-300 mt-4">
                                                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Gewährleistung der Systemsicherheit und -stabilität).
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 mt-2">
                                                Diese Daten werden für maximal 7 Tage gespeichert und anschließend gelöscht, sofern keine sicherheitsrelevanten Vorfälle eine längere Aufbewahrung erforderlich machen.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                                2.2 Kontaktaufnahme
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                                Wenn Sie uns per E-Mail, Kontaktformular oder auf andere Weise kontaktieren, werden die von Ihnen mitgeteilten Daten (Name, E-Mail-Adresse, Nachrichteninhalt, ggf. Telefonnummer und Unternehmensangaben) von uns gespeichert, um Ihre Anfrage zu bearbeiten und für mögliche Anschlussfragen.
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                                                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                Diese Daten werden nach vollständiger Bearbeitung Ihrer Anfrage und sofern keine gesetzlichen Aufbewahrungspflichten bestehen, gelöscht.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                                2.3 Beratungs- und Dienstleistungsverträge
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                                Im Rahmen unserer Beratungs- und Managed-Services-Tätigkeiten verarbeiten wir personenbezogene Daten unserer Kunden und deren Mitarbeiter, die für die Vertragserfüllung erforderlich sind. Dies kann umfassen:
                                            </p>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-4">
                                                <li>Kontaktdaten (Name, E-Mail, Telefon)</li>
                                                <li>Unternehmensdaten und Organisationsinformationen</li>
                                                <li>Technische Daten zur Systemkonfiguration und -verwaltung</li>
                                                <li>Projektdokumentation und Kommunikation</li>
                                                <li>Abrechnungsrelevante Daten</li>
                                            </ul>
                                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                                                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                Diese Daten werden für die Dauer der Geschäftsbeziehung sowie gemäß gesetzlicher Aufbewahrungsfristen (in der Regel 6-10 Jahre nach Vertragsende) gespeichert.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 3 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                                        3. Weitergabe von Daten
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        Eine Übermittlung Ihrer persönlichen Daten an Dritte erfolgt nur:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-4">
                                        <li>Wenn Sie ausdrücklich eingewilligt haben (Art. 6 Abs. 1 lit. a DSGVO)</li>
                                        <li>Zur Vertragserfüllung erforderlich ist (Art. 6 Abs. 1 lit. b DSGVO)</li>
                                        <li>Eine gesetzliche Verpflichtung besteht (Art. 6 Abs. 1 lit. c DSGVO)</li>
                                        <li>Dies zur Wahrung berechtigter Interessen erforderlich ist (Art. 6 Abs. 1 lit. f DSGVO)</li>
                                    </ul>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Wir arbeiten mit sorgfältig ausgewählten Dienstleistern zusammen (z.B. Hosting-Provider, E-Mail-Dienste). Diese Dienstleister sind vertraglich verpflichtet, Ihre Daten nur in unserem Auftrag und nach unseren Weisungen zu verarbeiten.
                                    </p>
                                </div>

                                {/* Section 4 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                                        4. Datenübermittlung in Drittländer
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Soweit wir Dienstleister außerhalb des Europäischen Wirtschaftsraums (EWR) einsetzen, erfolgt dies nur bei Vorliegen eines angemessenen Datenschutzniveaus (z.B. durch EU-Standardvertragsklauseln, Angemessenheitsbeschluss der EU-Kommission) oder mit Ihrer ausdrücklichen Einwilligung.
                                    </p>
                                </div>

                                {/* Section 5 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                                        5. Cookies und Tracking
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        Diese Website verwendet derzeit keine Cookies oder Tracking-Technologien zur Analyse des Nutzerverhaltens. Sollten wir solche Technologien in Zukunft einsetzen, werden Sie vorab informiert und um Ihre Einwilligung gebeten.
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind, können verwendet werden. Diese dienen ausschließlich der Funktionalität und werden nicht für Tracking-Zwecke eingesetzt.
                                    </p>
                                </div>

                                {/* Section 6 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                                        6. Externe Links
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Unsere Website enthält Links zu externen Websites Dritter (z.B. Opsora, LinkedIn). Wir haben keinen Einfluss auf die Inhalte und Datenschutzpraktiken dieser Websites und übernehmen hierfür keine Verantwortung. Bitte informieren Sie sich über die Datenschutzerklärungen der jeweiligen Anbieter.
                                    </p>
                                </div>

                                {/* Section 7 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                                        7. Datensicherheit
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder den Zugriff unberechtigter Personen zu schützen. Dazu gehören:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                                        <li>SSL/TLS-Verschlüsselung für die Datenübertragung</li>
                                        <li>Sichere Hosting-Infrastruktur mit regelmäßigen Sicherheitsupdates</li>
                                        <li>Zugriffsbeschränkungen und Authentifizierung</li>
                                        <li>Regelmäßige Sicherheitsüberprüfungen</li>
                                    </ul>
                                </div>

                                {/* Section 8 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                                        8. Ihre Rechte nach der DSGVO
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                                        Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:
                                    </p>

                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                8.1 Auskunftsrecht (Art. 15 DSGVO)
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                Sie haben das Recht, Auskunft über die von uns verarbeiteten personenbezogenen Daten zu erhalten.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                8.2 Recht auf Berichtigung (Art. 16 DSGVO)
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                Sie haben das Recht, die Berichtigung unrichtiger oder die Vervollständigung unvollständiger Daten zu verlangen.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                8.3 Recht auf Löschung (Art. 17 DSGVO)
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                Sie haben das Recht, die Löschung Ihrer Daten zu verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                8.4 Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer Daten zu verlangen.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                8.5 Recht auf Datenübertragbarkeit (Art. 20 DSGVO)
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                8.6 Widerspruchsrecht (Art. 21 DSGVO)
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                Sie haben das Recht, der Verarbeitung Ihrer Daten aus Gründen, die sich aus Ihrer besonderen Situation ergeben, zu widersprechen.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                8.7 Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO)
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                Falls die Verarbeitung auf Ihrer Einwilligung beruht, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                8.8 Beschwerderecht bei der Aufsichtsbehörde (Art. 77 DSGVO)
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer Daten gegen die DSGVO verstößt.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 9 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                                        9. Ausübung Ihrer Rechte
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        Zur Ausübung Ihrer Rechte oder bei Fragen zum Datenschutz kontaktieren Sie uns bitte unter:
                                    </p>
                                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                                        <p className="text-gray-700 dark:text-gray-300">
                                            <strong>E-Mail:</strong> tobias@opsora.io
                                        </p>
                                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                                            Wir werden Ihre Anfrage innerhalb von 30 Tagen bearbeiten.
                                        </p>
                                    </div>
                                </div>

                                {/* Section 10 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                                        10. Aktualität und Änderung dieser Datenschutzerklärung
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Oktober 2025. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf dieser Website von Ihnen abgerufen und ausgedruckt werden.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="max-w-4xl mx-auto space-y-6">
                                {/* Section 1 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                                        1. Controller and Data Protection Officer
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        The controller responsible for data processing on this website is:
                                    </p>
                                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                                        <p className="text-gray-700 dark:text-gray-300">
                                            <strong>Tobias Schüle</strong><br />
                                            Opsora<br />
                                            Opsora LLC<br />
                                            7901 4th St N STE 300<br />
                                            St. Petersburg, FL 33702<br />
                                            USA<br />
                                            <strong>Email:</strong> tobias@opsora.io
                                        </p>
                                    </div>
                                </div>

                                {/* Section 2 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                                        2. Scope of Data Processing
                                    </h2>

                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                                2.1 Access Data and Hosting
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                                Every time you access our website, information is automatically collected that your browser transmits to our server (so-called server log files). This includes:
                                            </p>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-4">
                                                <li>IP address of the accessing computer</li>
                                                <li>Date and time of access</li>
                                                <li>Name and URL of the retrieved file</li>
                                                <li>Amount of data transferred</li>
                                                <li>Notification of successful retrieval (HTTP status code)</li>
                                                <li>Browser type and version</li>
                                                <li>Operating system</li>
                                                <li>Referrer URL (previously visited page)</li>
                                            </ul>
                                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                                <strong>Legal basis:</strong> Art. 6(1)(f) GDPR (legitimate interest in ensuring system security and stability).
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                This data is stored for a maximum of 7 days and then deleted, unless security-relevant incidents require longer retention.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                                2.2 Contact
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                                When you contact us via email, contact form, or other means, the data you provide (name, email address, message content, possibly phone number and company information) will be stored by us to process your inquiry and for possible follow-up questions.
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                                <strong>Legal basis:</strong> Art. 6(1)(b) GDPR (contract initiation) or Art. 6(1)(f) GDPR (legitimate interest in responding to inquiries).
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                This data will be deleted after your inquiry has been completely processed and provided there are no legal retention obligations.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                                2.3 Consulting and Service Contracts
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                                As part of our consulting and managed services activities, we process personal data of our clients and their employees that is necessary for contract fulfillment. This may include:
                                            </p>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-4">
                                                <li>Contact information (name, email, phone)</li>
                                                <li>Company data and organizational information</li>
                                                <li>Technical data for system configuration and management</li>
                                                <li>Project documentation and communication</li>
                                                <li>Billing-relevant data</li>
                                            </ul>
                                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                                <strong>Legal basis:</strong> Art. 6(1)(b) GDPR (contract fulfillment).
                                            </p>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                This data is stored for the duration of the business relationship and in accordance with legal retention periods (typically 6-10 years after contract termination).
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 3 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                                        3. Data Disclosure
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        Your personal data is only transmitted to third parties if:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-4">
                                        <li>You have given explicit consent (Art. 6(1)(a) GDPR)</li>
                                        <li>It is necessary for contract fulfillment (Art. 6(1)(b) GDPR)</li>
                                        <li>There is a legal obligation (Art. 6(1)(c) GDPR)</li>
                                        <li>It is necessary to protect legitimate interests (Art. 6(1)(f) GDPR)</li>
                                    </ul>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        We work with carefully selected service providers (e.g., hosting providers, email services). These service providers are contractually obligated to process your data only on our behalf and according to our instructions.
                                    </p>
                                </div>

                                {/* Section 4 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                                        4. Data Transfer to Third Countries
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        To the extent that we use service providers outside the European Economic Area (EEA), this only occurs if there is an adequate level of data protection (e.g., through EU standard contractual clauses, adequacy decision by the EU Commission) or with your explicit consent.
                                    </p>
                                </div>

                                {/* Section 5 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                                        5. Cookies and Tracking
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        This website currently does not use cookies or tracking technologies to analyze user behavior. Should we use such technologies in the future, you will be informed in advance and asked for your consent.
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Technically necessary cookies that are required for the operation of the website may be used. These serve exclusively for functionality and are not used for tracking purposes.
                                    </p>
                                </div>

                                {/* Section 6 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                                        6. External Links
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Our website contains links to external third-party websites (e.g., Opsora, LinkedIn). We have no control over the content and privacy practices of these websites and assume no responsibility for them. Please refer to the privacy policies of the respective providers.
                                    </p>
                                </div>

                                {/* Section 7 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                                        7. Data Security
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        We implement technical and organizational security measures to protect your data against accidental or intentional manipulation, loss, destruction, or access by unauthorized persons. These include:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                                        <li>SSL/TLS encryption for data transmission</li>
                                        <li>Secure hosting infrastructure with regular security updates</li>
                                        <li>Access restrictions and authentication</li>
                                        <li>Regular security audits</li>
                                    </ul>
                                </div>

                                {/* Section 8 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                                        8. Your Rights under GDPR
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                                        You have the following rights regarding your personal data:
                                    </p>

                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                8.1 Right to Access (Art. 15 GDPR)
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                You have the right to obtain information about the personal data we process.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                8.2 Right to Rectification (Art. 16 GDPR)
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                You have the right to request the correction of inaccurate data or completion of incomplete data.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                8.3 Right to Erasure (Art. 17 GDPR)
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                You have the right to request the deletion of your data, provided there are no legal retention obligations.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                8.4 Right to Restriction of Processing (Art. 18 GDPR)
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                You have the right to request the restriction of processing of your data.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                8.5 Right to Data Portability (Art. 20 GDPR)
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                You have the right to receive your data in a structured, commonly used, and machine-readable format.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                8.6 Right to Object (Art. 21 GDPR)
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                You have the right to object to the processing of your data for reasons arising from your particular situation.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                8.7 Right to Withdraw Consent (Art. 7(3) GDPR)
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                If processing is based on your consent, you can withdraw it at any time with effect for the future.
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                                8.8 Right to Lodge a Complaint with a Supervisory Authority (Art. 77 GDPR)
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                You have the right to lodge a complaint with a data protection supervisory authority if you believe that the processing of your data violates GDPR.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Section 9 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                                        9. Exercising Your Rights
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        To exercise your rights or if you have questions about data protection, please contact us at:
                                    </p>
                                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                                        <p className="text-gray-700 dark:text-gray-300">
                                            <strong>Email:</strong> tobias@opsora.io
                                        </p>
                                        <p className="text-gray-700 dark:text-gray-300 mt-2">
                                            We will process your request within 30 days.
                                        </p>
                                    </div>
                                </div>

                                {/* Section 10 */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                                        10. Currency and Changes to This Privacy Policy
                                    </h2>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        This privacy policy is currently valid and dated October 2025. Due to the further development of our website or due to changed legal requirements, it may become necessary to change this privacy policy. The current privacy policy can be accessed and printed from this website at any time.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
