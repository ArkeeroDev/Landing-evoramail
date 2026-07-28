const fs = require('fs');
const path = require('path');
const outDir = 'C:/Landings/evoramail/src/app/pages/legal';

const COMPANY = 'Peicloud Digital, SL';
const NIF = 'B88891874';
const ADDRESS = 'Arias Montano, 5, 28007 Madrid, Spain';

const p = (t) => `<p>${t}</p>`;
const h2 = (t) => `<h2>${t}</h2>`;
const h3 = (t) => `<h3>${t}</h3>`;
const mail = (addr) => {
  const enc = addr.replace('@', '&#64;');
  return `<a href="mailto:${enc}">${enc}</a>`;
};

const terms = `<section id="reader" class="legal container">
  <div class="row"><div class="col-12 col-md-10">
  <h1>TERMS AND CONDITIONS</h1>
  ${p('These Terms and Conditions are effective from December 05, 2023 (“Effective Date”).')}
  ${h2('Owner of the website')}
  ${p(`The owner of this website (hereinafter, the “Website”) is ${COMPANY} (hereinafter, “the Company”, “we” or “us”), a Spanish company, with NIF ${NIF}, and registered office at ${ADDRESS}.`)}
  ${p('The Company carries out its activity within the permission-based e-mail marketing sector (advertising campaigns upon prior consent of the recipient). It is mainly dedicated to direct marketing, affiliate marketing and online advertising.')}
  ${h2('Users of the Website')}
  ${p('By visiting the Website (whether or not you are a registered member) and/or using any related service, you become a user of the Website and therefore you accept and agree to be bound by these Terms and Conditions and any additional terms and conditions appearing on the Website, including any future modifications, and to abide by all applicable laws, rules and regulations. Please read through these Terms and Conditions and any additional terms carefully.')}
  ${p('The Company may modify these Terms and Conditions at any time, and each such modification will be effective upon posting on the Website. Please read the Effective Date at the top of these Terms and Conditions to know when they were last updated. All material modifications will apply prospectively only. Your continued use of the Website and/or our services following any such modification constitutes your acceptance to be bound by these Terms and Conditions as so modified. It is therefore important that you review these Terms and Conditions regularly. If you do not agree to be bound by these Terms and Conditions and to abide by all applicable law, you must discontinue your use of this Website and our services immediately.')}
  ${p('Please bear in mind that the registration on the Website is limited to users aged eighteen (18) years and above. An authentication mechanism does not allow the registration of (a) those who do not enter their year of birth with valid characters, which must show that you are of legal age, and (b) those who do not expressly accept their majority of age. By registering yourself on the Website, you warrant that you are of legal age.')}
  ${h2('Users’ obligations')}
  ${p('You undertake to use the Website as well as any related content, service and information diligently, in accordance with the law, morality, public order and under the provisions of these Terms and Conditions.')}
  ${p('In this regard, you shall refrain from using them in any way that could prevent their normal functioning and enjoyment by other users of the Website, or that could infringe any right or cause any damage to the goods of the Company, its affiliates, suppliers, users or any third-party.')}
  ${p('When it comes to the use of the Website and our services, you agree not to use the Website as well as our services to:')}
  <ul>
    <li>Introduce, store or disseminate, through the Website or through any related services, viruses, bots, worms, or any other computer code, files or programs that are likely to damage, interrupt, destroy, or limit the functionality of any computer software or hardware or telecommunications equipment, the Website and/or any related services.</li>
    <li>Use false identities or impersonate or attempt to impersonate any person or entity in the use of the Website or any related services by using passwords or access codes of third-parties or otherwise.</li>
    <li>Destroy, alter, disable or damage the data, information, programs or electronic documents of the Company, its suppliers or third-parties.</li>
    <li>Use contents and information obtained through the Website to send advertising, commercial communications, or to collect or store personal data of third-parties.</li>
    <li>Violate the rights of others including patent, trademark, trade secret, copyright, privacy, publicity or other proprietary rights.</li>
    <li>Interfere with, damage, disable, disrupt, impair, create an undue burden on, or gain unauthorized access to our services, including the Company’s servers, networks or accounts.</li>
    <li>Cover, remove, disable, block or obscure advertisements or other portions of our services.</li>
    <li>Use technology or any automated system such as scripts or bots in order to collect usernames, passwords, email addresses or other data from our services, or to circumvent or modify any security technology or software that is part of our services.</li>
    <li>Use our services to advertise or promote competing services.</li>
    <li>Use our Website and/or services in a manner inconsistent with any and all applicable law.</li>
    <li>Attempt, facilitate or encourage others to do any of the foregoing.</li>
  </ul>
  ${p('You acknowledge that the Company reserves the right to investigate and take appropriate legal action against anyone who, in the Company’s sole discretion, violates these Terms and Conditions, including but not limited to, terminating their user account and/or reporting such user conduct or activity to law enforcement authorities.')}
  ${p('You acknowledge, consent and agree that the Company may access, preserve or disclose information you provide to us, when the Company has a good faith belief that such access, preservation or disclosure is necessary in order to: (i) protect or defend the legal rights or property of the Company, our subsidiaries or affiliates, or their employees, agents and contractors (including enforcement of our agreements); (ii) protect the safety and security of users of the Website and/or our services or members of the public including acting in urgent circumstances; (iii) protect against fraud or for risk management purposes; or (iv) comply with the law or legal process. Please read our <a routerLink="/politica-de-privacidad">Privacy Policy</a> for further details about how we use your data.')}
  ${p('All registration information you submit to create an account must be true, accurate, complete and up to date. You acknowledge that you will be liable for any damages, direct or indirect, that may arise from any breach of such obligation. If data provided belong to a third-party, you warrant that you have informed said third-party of the aspects contained herein and obtained his/her consent to provide the data to the Company for the purposes specified in our <a routerLink="/politica-de-privacidad">Privacy Policy</a>.')}
  ${p('You are responsible for maintaining the confidentiality of your password as well as for any use of your account. It is therefore critical that you do not share your password with anyone. You agree not to use the account, username, e-mail address or password of another member or subscriber at any time. You agree to notify the Company immediately if you suspect any unauthorized use of, or access to, your account or password.')}
  ${h2('Termination')}
  ${p('These Terms and Conditions remain in full force and effect while you use the Website and/or any related service.')}
  ${p(`If you are receiving newsletters from the Company, you may terminate your subscription at any time, for any reason, by following the unsubscribe instructions in the newsletter or by sending your request at ${mail('dpd@peicloud.com')}.`)}
  ${p('The Company may terminate your access to any Company service at any time, for any or no reason, with or without prior notice or explanation, and without liability.')}
  ${p('Furthermore, even after your access to any Company service is terminated, these Terms and Conditions will remain in effect.')}
  ${p('You agree that your account is non-transferable and any rights to your account terminate upon your death.')}
  ${h2('Website Content')}
  ${p('The Website offers you the possibility to register online as an Advertiser and/or Affiliate. Please bear in mind that additional terms and conditions shall apply in these cases. Read carefully all applicable terms and conditions before registering as an Advertiser or Affiliate.')}
  ${p('Any material presented in the Website including, but not limited to, audio, images, software and/or text (henceforth referred to as “Content”) is protected according to the Intellectual Property Laws. The Content shall not be used in any manner other than as established in these Terms and Conditions. It is prohibited to eliminate references to copyright or commercial brands and any other corresponding references. We may take legal action against any party that makes an unauthorised use of the Content.')}
  ${p('You are only authorised to use the Website for personal purposes. Therefore, you are always an end consumer and not a reseller or otherwise. Supply, copy, exchange, modification, selling and transmission of any Content to which you may have access through the Website for any purpose is not permitted, whether paid or not, unless you are authorized by the Company or, where appropriate, by the third-party holders of the corresponding rights, or unless it is legally permitted.')}
  ${p('Save for personal data if registering, any communication or material that you send to the Website, including details, questions, comments, ideas, suggestions or similar, will be considered non-confidential information by the Company. Said communication may be used by the Company or its affiliates for any purpose, including but not limited to reproduction, disclosure, publication, retransmission and forwarding. In addition, you acknowledge and accept that the Company will be free to use (without restriction, time limit or compensation to you) in any way and for any purpose, any ideas, concepts or techniques included or derived from any user-Website correspondence.')}
  ${h2('Third-Party Links and Services')}
  ${p('The Website may include links to other websites, applications, resources or other services created by third-parties (“third-party services”). When you engage with a third-party service, you are interacting with the third-party, not with the Company. If you choose to use a third-party service and share information with it, the third-party services may use and share your data in accordance with the third-party service’s privacy policy and your privacy settings on such third-party service. You should read the corresponding privacy policy carefully before using a third-party service. In addition, the third-party providing the third-party service may use other parties to provide portions of the application or service to you, such as technology, development or payment services. The Company is not responsible for and makes no warranties, express or implied, as to the third-party services or the providers of such third-party services (including, but not limited to, the accuracy or completeness of the information provided by such third-party service or the privacy practices thereof). The inclusion of any third-party service or a link thereto on the Website and/or at any Company service does not imply approval or endorsement of the third-party service. The Company is not responsible for the content or practices of any websites other than our Website, even if the third-party website links to our Website and even if it is operated by an affiliated company or a company otherwise connected with our Website. By using the Website or any Company service, you acknowledge and agree that the Company is not responsible or liable to you for any content or other materials hosted and served from any website other than our Website. When you access third-party services, you do so at your own risk. The Company encourages you not to provide any personally identifiable information to any third-party service unless you know and are comfortable with the party with whom you are interacting.')}
  ${h2('Privacy and Cookies Policy')}
  ${p('The use of this Website and related services is also governed by our <a routerLink="/politica-de-privacidad">Privacy Policy</a> and our <a routerLink="/politica-de-cookies">Cookies Policy</a>, which are incorporated into these Terms and Conditions by this reference.')}
  ${h2('Disclaimers')}
  ${p('The Website and any related service are provided “AS-IS” and “as available” and the Company does not guarantee or promise any specific results from the use of the Website and any related service. The Company expressly disclaims any warranties and conditions of any kind, whether express or implied, including but not limited to, the implied warranties of merchantability, fitness for a particular purpose and non-infringement. In particular, the Company makes no warranty that your use of the Website and/or any related service will be uninterrupted, timely, secure or error-free or that any information obtained by you on, through or in connection with the Company services or third-party services (including but not limited to, through third-party advertisements) will be accurate or reliable. Under no circumstances will the Company be responsible for any loss or damage, including but not limited to, property damage, personal injury or death, resulting from use of the Website and any related service, problems or technical malfunction in connection with use of the Website and/or the Company services, any material downloaded or otherwise obtained in connection with the Website and/or the Company services, any third-party advertisement or third-party service posted on, through or in connection with the Company services, or the conduct of any users of the Company Services, whether online or offline. Your use of third-party advertisements, third-party services and the goods or services provided by any third-parties is solely your responsibility and at your own risk. Third-party advertisements and third-party Services do not necessarily reflect the opinions or policies of the Company.')}
  ${h2('Limitation on Liability')}
  ${p('IN NO EVENT WILL THE COMPANY BE LIABLE TO YOU OR ANY THIRD-PARTY FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES, INCLUDING, WITHOUT LIMITATION, LOST PROFIT DAMAGES (DIRECT OR INDIRECT) ARISING FROM YOUR USE OF THE WEBSITE AND/OR THE COMPANY SERVICES, EVEN IF THE COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, THE COMPANY’S LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO THE COMPANY FOR THE COMPANY SERVICES DURING THE TERM OF YOUR USE OF THE COMPANY SERVICES. NOTHING IN THESE TERMS AND CONDITIONS SHALL EXCLUDE OR IN ANY WAY LIMIT THE COMPANY’S LIABILITY FOR DEATH OR PERSONAL INJURY CAUSED BY ITS NEGLIGENCE OR FOR ANY OTHER LIABILITY TO THE EXTENT SUCH LIABILITY MAY NOT BE EXCLUDED OR LIMITED BY LAW.')}
  ${h2('Jurisdiction and applicable law')}
  ${p('These Terms and Conditions will be governed by, and construed in accordance with, the laws of Spain, without regard to its conflict of law provisions. You and the Company agree to submit to the exclusive jurisdiction of the Courts of Madrid to resolve any dispute arising out of these Terms and Conditions or services provided by the Company.')}
  ${h2('Indemnity')}
  ${p('You agree to indemnify and hold the Company, its affiliates, subcontractors and other partners, and their respective officers, agents, partners and employees, harmless from any loss, liability, claim, or demand, including, but not limited to, reasonable attorneys’ fees, made by any third-party due to or arising out of your use of the Website or any related service, your breach of these Terms and Conditions, your violation of any rights of another, through or in connection with the Company services.')}
  ${h2('Other')}
  ${p('The failure of the Company to exercise or enforce any right or provision of these Terms and Conditions will not operate as a waiver of such right or provision.')}
  ${p('All Section titles in these Terms and Conditions are for convenience only and have no legal or contractual effect.')}
  ${p('These Terms and Conditions operate to the fullest extent permissible by law. If any provision of these Terms and Conditions is unlawful, void or unenforceable, that provision is deemed severable from these Terms and Conditions and does not affect the validity and enforceability of any remaining provisions.')}
  ${p('<strong>THROUGH THE USE OF THE WEBSITE YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTAND THIS AGREEMENT AND YOU ACCEPT TO COMPLY WITH ALL ITS PROVISIONS.</strong>')}
  </div></div>
</section>
`;

const cookies = `<section id="reader" class="legal container">
  <div class="row"><div class="col-12 col-md-10">
  <h1>COOKIE POLICY</h1>
  ${p('This site uses cookies and similar technologies to bring you the best experience, faster and safer. In this Policy we explain you what are these technologies, what are they used for (for example, to start a navigation session, to save your preferences, to personalize the diffused contents and to show you the most appropriate advertisements) and by whom. Following we will explain how we and our partners and third parties make use of these technologies. If you want to sign up, please also check our <a routerLink="/politica-de-privacidad">Privacy Policy</a>, including its cookies part.')}
  ${h2('What are cookies?')}
  ${p('Cookies are devices that are sent to your browser and are installed in the terminal from where you navigate with the purpose of storing information that could be recovered afterwards. These technologies are essential for the correct functioning, integration, availability and appropriateness of the contents of this Website, and they provide important advantages in the provision of the services, facilitating the navigation and usability. Cookies can’t read information stored in any device. They can’t harm or alter your device either.')}
  ${h2('For what purposes do we collect information through cookies?')}
  ${p('Our goal is to improve the Website, to optimize your experience with it and, in general, to know how the Website is accessed and visited. We also collect information so that the advertisements that you see is as relevant to your interest as possible. Accordingly, we collect information for us and for third parties.')}
  ${p('For all of it, we use different cookies with different functionalities that we will detail later on.')}
  ${h2('Which information do we collect with cookies?')}
  ${p('To cover the purposes indicated above, we collect event logs where the following data is registered:')}
  <ul>
    <li>The browser, the operative system, the device, sometimes the unique identifying of your device and the network that you use to connect to the Internet;</li>
    <li>The number of times that you access to the Website;</li>
    <li>The IP address where you access the Website from;</li>
    <li>The pages that you visited within the Website; and</li>
    <li>The websites and pages that you have visited before entering the Website.</li>
  </ul>
  ${p('The information that we collect doesn’t include personal data that allow to identify you directly. There are some data, such as your device or your IP address that could allow to identify you, but we don’t do it, neither we have the means to do it. However, even though we don’t identify you that way, it is possible that with the data we collect, we have specific data about the users that distinguish them from the rest.')}
  ${h2('With whom do we share the information we collect?')}
  ${p('We share the information with third parties that help us analyze the collected information, and thus, to achieve the purposes we have with it, to generate statistics, to know usage trends, and to perform improvement and maintenance tasks. This way, we can receive reports individually or by groups. If you authorize us to share your navigation analysis and interest groups with third parties, we will share the information with <a href="https://www.heapanalytics.com/privacy" target="_blank" rel="noopener"><strong>Heap</strong></a>, <a href="https://www.intercom.com/terms-and-policies#cookie-policy" target="_blank" rel="noopener"><strong>Intercom</strong></a>, <a href="https://www.optimizely.com/legal/opt-out/" target="_blank" rel="noopener"><strong>Optimizely</strong></a>, <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener"><strong>Google Analytics</strong></a> and <a href="https://www.inspectlet.com/optout" target="_blank" rel="noopener"><strong>Inspectlet</strong></a>.')}
  ${h2('How do we collect the information?')}
  ${p('We collect the information through specific cookies on the Website and our Partner’s and third parties that operate on the net.')}
  ${h3('Session cookies:')}
  ${p('Session cookies are necessary for the correct usage of the Website, the uninterrupted navigation remembering options of language or country. They are used to identify the same temporary session of a user or navigation session, measuring in this way, for example, the frequency.')}
  ${h3('Technical cookies:')}
  ${p('Technical cookies stock generic and anonymous information that doesn’t include personal data, or they collect information that identifies users. Their purpose is to guarantee the functioning of the Website.')}
  ${h3('Analytic cookies:')}
  ${p('These cookies allow to analyze and measure the properties and functionalities of this Website and proceed with its measurement with improvement purposes. The cookies installed are third party cookies.')}
  ${h3('Geolocation cookies:')}
  ${p('They are cookies installed by third party; Google TagManager. They collect physical location data. When using a Google service that can register location, it will be possible to collect and process information about real location such as GPS signals sent by a mobile device.')}
  ${h3('Advertisement cookies or functional cookies:')}
  ${p('Advertisement cookies have the purpose of improving the user’s navigation experience. They allow to diffuse adequate and relevant advertisements, avoiding that they the same advertisement is continuously showing. They are necessary for the ad servers to be able to know the diffusion frequency of the advertising campaigns. They allow to remember past choices made on the Web offering more personalized options. These cookies are placed sometimes by third party servers or third parties that you can consult on the list to the right.')}
  ${h3('Behavioral advertising cookies:')}
  ${p('These cookies have an advertising purpose. They allow to collect information about the user’s navigation through their navigation sessions, showing different advertisements related directly with their interests or previous searches. They are usually cookies that come from programmatic platforms, adexchanges, DSP, SSP, DMP and other technologies of authorized advertising trade.')}
  ${h3('Social cookies:')}
  ${p('Some services can use connectors with various social media: Facebook, Twitter or Google+. When using the social registration, you authorize the social media to place cookies. These cookies add the social component to your navigation.')}
  ${h2('How can I manage the cookies?')}
  ${p('You can access the preferences menu of your browser and configure it so cookies are not installed, to delete the existent ones and/or eliminate them before starting the navigation through other pages of the Website. To configure your cookies preferences, you can follow the indicated steps, depending on the browser that you are using to navigate. We remind you that, if you reject the installation of cookies, the service may be affected and that it may not allow you to make correct use of it partially or completely.')}
  ${h2('Cookies Policy update')}
  ${p('The cookies policy can change depending on legislative modifications, or with the purpose of adapting said policy to the instructions dictated by the Spanish Data Protection Agency, as well as when changes happen in the agreements with third parties that install or use cookies through our Portals.')}
  ${h2('What do you allow us to do?')}
  ${p('Share your navigation analysis and groups of interests with third parties')}
  </div></div>
</section>
`;

fs.writeFileSync(path.join(outDir, 'terms.component.html'), terms);
fs.writeFileSync(path.join(outDir, 'cookies.component.html'), cookies);
console.log('terms/cookies OK', {
  peicloud: terms.includes(COMPANY),
  nif: terms.includes(NIF),
  address: terms.includes('Arias Montano'),
  rock: terms.includes('Rock Internet') || cookies.includes('Rock Internet'),
  iab: terms.includes('IAB Europe') || cookies.includes('IAB Europe'),
  arkeero: /arkeero/i.test(terms + cookies),
});
