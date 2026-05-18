import io

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

broken_start_idx = content.find('<div cl        <div class="cards-grid social-work-grid">')
seva_idx = content.find('<div class="seva-cards-container">')

if broken_start_idx != -1 and seva_idx != -1:
    before = content[:broken_start_idx]
    after = content[seva_idx:]
    
    timeline_rest = """<div class="timeline-card animate-on-scroll" data-animation="slideRight">
              <span class="timeline-year">2014 - 2015</span>
              <h3 class="timeline-title" data-hi="विधायक प्रतिनिधि" data-en="MLA Representative">विधायक प्रतिनिधि</h3>
              <p class="timeline-desc" data-hi="विकास खंड चौरई" data-en="Vikas Khand Chaurei">विकास खंड चौरई</p>
            </div>
          </div>

          <!-- Timeline Entry 9 - Left -->
          <div class="timeline-entry left">
            <div class="timeline-node" aria-hidden="true"></div>
            <div class="timeline-card animate-on-scroll" data-animation="slideLeft">
              <span class="timeline-year">2015 - 2022</span>
              <h3 class="timeline-title" data-hi="उपाध्यक्ष एवं अन्य प्रमुख पद" data-en="Vice President & Key Roles">
                उपाध्यक्ष एवं अन्य प्रमुख पद</h3>
              <p class="timeline-desc"
                data-hi="उपाध्यक्ष, जिला पंचायत छिंदवाड़ा | अध्यक्ष, जिला शिक्षा स्थायी समिति | सदस्य, योजना मंडल छिंदवाड़ा"
                data-en="Vice President, Zila Panchayat Chhindwara | President District Education Standing Committee | Member Planning Board Chhindwara">
                उपाध्यक्ष, जिला पंचायत छिंदवाड़ा | अध्यक्ष, जिला शिक्षा स्थायी समिति | सदस्य, योजना मंडल छिंदवाड़ा</p>
            </div>
          </div>

          <!-- Timeline Entry 10 - Right -->
          <div class="timeline-entry right">
            <div class="timeline-node" aria-hidden="true"></div>
            <div class="timeline-card animate-on-scroll" data-animation="slideRight">
              <span class="timeline-year">2019 - 2025</span>
              <h3 class="timeline-title" data-hi="प्रदेश महामंत्री" data-en="General Secretary">प्रदेश महामंत्री</h3>
              <p class="timeline-desc" data-hi="अखिल भारतीय युवा रघुवंशी क्षत्रिय महासभा म.प्र."
                data-en="Akhil Bharatiya Yuva Raghuvanshi Kshatriya Mahasabha M.P.">अखिल भारतीय युवा रघुवंशी क्षत्रिय
                महासभा म.प्र.</p>
            </div>
          </div>

          <!-- Timeline Entry 11 - Left -->
          <div class="timeline-entry left">
            <div class="timeline-node" aria-hidden="true"></div>
            <div class="timeline-card animate-on-scroll" data-animation="slideLeft">
              <span class="timeline-year">2020 - 2025</span>
              <h3 class="timeline-title" data-hi="अध्यक्ष" data-en="President">अध्यक्ष</h3>
              <p class="timeline-desc" data-hi="भाजपा मंडल चौरई ग्रामीण" data-en="BJP Mandal Chaurei Rural">भाजपा मंडल
                चौरई ग्रामीण</p>
            </div>
          </div>

          <!-- Timeline Entry 12 - Right -->
          <div class="timeline-entry right">
            <div class="timeline-node" aria-hidden="true"></div>
            <div class="timeline-card animate-on-scroll" data-animation="slideRight">
              <span class="timeline-year">2021 - 2022</span>
              <h3 class="timeline-title" data-hi="मुख्य आयुक्त" data-en="Chief Commissioner">मुख्य आयुक्त</h3>
              <p class="timeline-desc" data-hi="भारत स्काउट एवं गाइड, विकास खंड चौरई"
                data-en="Bharat Scout & Guide, Vikas Khand Chaurei">भारत स्काउट एवं गाइड, विकास खंड चौरई</p>
            </div>
          </div>

          <!-- Timeline Entry 13 - Left -->
          <div class="timeline-entry left">
            <div class="timeline-node" aria-hidden="true"></div>
            <div class="timeline-card animate-on-scroll" data-animation="slideLeft">
              <span class="timeline-year" data-hi="2021 - वर्तमान" data-en="2021 - Present">2021 - वर्तमान</span>
              <h3 class="timeline-title" data-hi="उपाध्यक्ष" data-en="Vice President">उपाध्यक्ष</h3>
              <p class="timeline-desc" data-hi="तुलसी जयंती समारोह समिति चौरई"
                data-en="Tulsi Jayanti Samaroh Samiti Chaurei">तुलसी जयंती समारोह समिति चौरई</p>
            </div>
          </div>

          <!-- Timeline Entry 14 - Right (Current - Highlighted) -->
          <div class="timeline-entry right highlight">
            <div class="timeline-node" aria-hidden="true"></div>
            <div class="timeline-card animate-on-scroll" data-animation="slideRight">
              <span class="timeline-year" data-hi="2025 - वर्तमान" data-en="2025 - Present">2025 - वर्तमान</span>
              <h3 class="timeline-title" data-hi="प्रदेश उपाध्यक्ष" data-en="State Vice President">प्रदेश उपाध्यक्ष</h3>
              <p class="timeline-desc" data-hi="अखिल भारतीय अखंड रघुवंशी क्षत्रिय महापरिषद म.प्र."
                data-en="Akhil Bharatiya Akhand Raghuvanshi Kshatriya Mahaparishad M.P.">अखिल भारतीय अखंड रघुवंशी
                क्षत्रिय महापरिषद म.प्र.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- ========================================== -->
    <!-- SOCIAL WORK SECTION                        -->
    <!-- ========================================== -->
    <section class="social-work section-warm" id="social-work" aria-label="सामाजिक कार्य">
      <div class="container">
        <div class="section-header text-center">
          <p class="section-label animate-on-scroll" data-animation="fadeIn">
            <span data-hi="समाज सेवा" data-en="Social Work">समाज सेवा</span>
          </p>
          <h2 class="section-title animate-on-scroll" data-animation="slideUp">
            <span data-hi="गांव, किसान, युवा और शिक्षा के लिए कार्य"
              data-en="Work for village, farmer, youth and education">गांव, किसान, युवा और शिक्षा के लिए कार्य</span>
          </h2>
        </div>

        <div class="cards-grid social-work-grid">
          <!-- Card 1: ODF -->
          <div class="social-card animate-on-scroll" data-animation="fadeIn" data-delay="0">
            <div class="social-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <h3 class="social-card-title" data-hi="ODF अभियान" data-en="ODF Campaign">ODF अभियान</h3>
            <p class="social-card-desc"
              data-hi="स्वच्छ भारत अभियान में सक्रिय भागीदारी, जिले की समस्त ग्राम पंचायतों को ODF कराया"
              data-en="Active participation in Swachh Bharat Mission, made all village panchayats ODF">स्वच्छ भारत
              अभियान में सक्रिय भागीदारी, जिले की समस्त ग्राम पंचायतों को ODF कराया</p>
            <span class="social-card-stat" data-hi="100% ODF लक्ष्य" data-en="100% ODF Achieved">100% ODF लक्ष्य</span>
          </div>

          <!-- Card 2: Tree Plantation -->
          <div class="social-card animate-on-scroll" data-animation="fadeIn" data-delay="0.1">
            <div class="social-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 20A7 7 0 0 1 4 13c0-3.5 3-7 7-9 1 0 4 .5 7 2 1.5 1 2.5 3.5 2.5 5 0 4.5-3.5 8-8 9z"/>
                <path d="M11 20v-6"/>
              </svg>
            </div>
            <h3 class="social-card-title" data-hi="वृक्षारोपण" data-en="Tree Plantation">वृक्षारोपण</h3>
            <p class="social-card-desc" data-hi="मनरेगा अंतर्गत पर्यावरण सुरक्षा हेतु सर्वाधिक वृक्षारोपण"
              data-en="Maximum tree plantation under MNREGA for environmental protection">मनरेगा अंतर्गत पर्यावरण
              सुरक्षा हेतु सर्वाधिक वृक्षारोपण</p>
            <span class="social-card-stat" data-hi="5000+ वृक्ष रोपे गए" data-en="5000+ trees planted">5000+ वृक्ष रोपे गए</span>
          </div>

          <!-- Card 3: Health Camps -->
          <div class="social-card animate-on-scroll" data-animation="fadeIn" data-delay="0.2">
            <div class="social-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                <path d="M12 7v6"/>
                <path d="M9 10h6"/>
              </svg>
            </div>
            <h3 class="social-card-title" data-hi="स्वास्थ्य शिविर" data-en="Health Camps">स्वास्थ्य शिविर</h3>
            <p class="social-card-desc" data-hi="निःशुल्क स्वास्थ्य जांच शिविर एवं नेत्र शिविरों का आयोजन"
              data-en="Organizing free health checkup camps and eye camps">निःशुल्क स्वास्थ्य जांच शिविर एवं नेत्र
              शिविरों का आयोजन</p>
            <span class="social-card-stat" data-hi="नियमित आयोजन" data-en="Regular Camps">नियमित आयोजन</span>
          </div>

          <!-- Card 4: Blood Donation -->
          <div class="social-card animate-on-scroll" data-animation="fadeIn" data-delay="0.3">
            <div class="social-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                <path d="M12 8v4"/>
                <path d="M10 10h4"/>
              </svg>
            </div>
            <h3 class="social-card-title" data-hi="रक्तदान शिविर" data-en="Blood Donation Camps">रक्तदान शिविर</h3>
            <p class="social-card-desc" data-hi="जीवनदान रक्तदान कार्यक्रम, जरूरतमंदों को रक्त उपलब्ध कराना"
              data-en="Life-giving blood donation programs, providing blood to the needy">जीवनदान रक्तदान कार्यक्रम,
              जरूरतमंदों को रक्त उपलब्ध कराना</p>
            <span class="social-card-stat" data-hi="1000+ यूनिट दान" data-en="1000+ units donated">1000+ यूनिट दान</span>
          </div>

          <!-- Card 5: Education Support -->
          <div class="social-card animate-on-scroll" data-animation="fadeIn" data-delay="0.1">
            <div class="social-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <h3 class="social-card-title" data-hi="शिक्षा सहायता" data-en="Education Support">शिक्षा सहायता</h3>
            <p class="social-card-desc" data-hi="जरूरतमंद बच्चों को पढ़ाई हेतु आर्थिक सहयोग"
              data-en="Financial assistance for education to needy children">जरूरतमंद बच्चों को पढ़ाई हेतु आर्थिक सहयोग
            </p>
            <span class="social-card-stat" data-hi="छात्रवृत्ति एवं सहयोग" data-en="Scholarships & Aid">छात्रवृत्ति एवं सहयोग</span>
          </div>

          <!-- Card 6: Career Counselling -->
          <div class="social-card animate-on-scroll" data-animation="fadeIn" data-delay="0.2">
            <div class="social-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6"/>
                <circle cx="12" cy="12" r="2"/>
                <path d="M22 2 15 9"/>
              </svg>
            </div>
            <h3 class="social-card-title" data-hi="करियर मार्गदर्शन" data-en="Career Counselling">करियर मार्गदर्शन</h3>
            <p class="social-card-desc" data-hi="युवाओं के लिए करियर परामर्श एवं स्वरोजगार हेतु मदद"
              data-en="Career guidance for youth and help for self-employment">युवाओं के लिए करियर परामर्श एवं स्वरोजगार
              हेतु मदद</p>
            <span class="social-card-stat" data-hi="युवा सशक्तिकरण" data-en="Youth Empowerment">युवा सशक्तिकरण</span>
          </div>

          <!-- Card 7: Public Welfare -->
          <div class="social-card animate-on-scroll" data-animation="fadeIn" data-delay="0.3">
            <div class="social-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 class="social-card-title" data-hi="जन कल्याण कार्यक्रम" data-en="Public Welfare Programs">जन कल्याण
              कार्यक्रम</h3>
            <p class="social-card-desc" data-hi="सफाई कर्मियों, स्वास्थ्य कर्मियों, पत्रकारों का सम्मान"
              data-en="Felicitation of sanitation workers, health workers, journalists">सफाई कर्मियों, स्वास्थ्य
              कर्मियों, पत्रकारों का सम्मान</p>
            <span class="social-card-stat" data-hi="सामुदायिक सम्मान" data-en="Community Honor">सामुदायिक सम्मान</span>
          </div>

          <!-- Card 8: Rural Development -->
          <div class="social-card animate-on-scroll" data-animation="fadeIn" data-delay="0.4">
            <div class="social-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <path d="M9 22V12h6v10" />
              </svg>
            </div>
            <h3 class="social-card-title" data-hi="ग्रामीण विकास" data-en="Rural Development">ग्रामीण विकास</h3>
            <p class="social-card-desc" data-hi="ग्रामीण क्षेत्रों में बुनियादी सुविधाएं और विकास कार्य"
              data-en="Infrastructure and development work in rural areas">ग्रामीण क्षेत्रों में बुनियादी सुविधाएं और
              विकास कार्य</p>
            <span class="social-card-stat" data-hi="सुदृढ़ अधोसंरचना" data-en="Strong Infrastructure">सुदृढ़ अधोसंरचना</span>
          </div>
        </div>
        
        """
    new_content = before + timeline_rest + after
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('SUCCESS')
else:
    print('FAILED')
