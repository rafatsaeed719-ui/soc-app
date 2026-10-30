# جنود المسيح S.O.C — خطوات التشغيل

البرنامج دلوقتي شغال **نسخة تجريبية** (البيانات بتتحفظ على الجهاز بس). عشان يبقى حقيقي والخدام كلهم يشوفوا بعض ويتراسلوا، اعمل الخطوات دي مرة واحدة:

## 1) Firebase (الحسابات وقاعدة البيانات) — مجاني
1. ادخل https://console.firebase.google.com واعمل مشروع جديد مثلاً `soc-app`.
2. **Authentication** ← Get started ← فعّل **Email/Password**.
   (التسجيل في البرنامج برقم التليفون وكلمة السر، والبرنامج بيحوّل الرقم لإيميل داخلي تلقائياً — مفيش رسايل SMS ومفيش فلوس.)
3. **Firestore Database** ← Create database ← اختار أقرب مكان (مثلاً `europe-west`).
4. في Firestore ← **Rules**: امسح الموجود والصق محتوى ملف `firestore.rules`، وغيّر الرقم `01000000000` لرقم تليفونك، واضغط Publish.
5. Project settings (الترس) ← Your apps ← اضغط `</>` (Web) ← هيديك `firebaseConfig`.
   انسخ apiKey و authDomain و projectId و appId وحطهم في ملف `www/config.js` مكان `firebase: null`.

## 2) Cloudinary (رفع الصور والكتب والملفات) — مجاني
1. اعمل حساب على https://cloudinary.com
2. من الـ Dashboard انسخ **Cloud name**.
3. Settings ← Upload ← Upload presets ← Add upload preset ← خلّي **Signing mode = Unsigned** واحفظ، وانسخ اسمه.
4. Settings ← Security ← فعّل **Allow delivery of PDF and ZIP files**.
5. حط الاتنين في `www/config.js`:
   `cloudinary: { cloudName: "اسمك", uploadPreset: "اسم البريسيت" }`

## 3) الأدمن
في `www/config.js` غيّر `adminPhones` لرقم تليفونك. لما تسجل بالرقم ده هيظهرلك مربع **الإدارة** (إيقاف حسابات وحذف أي كتاب).

## 4) طلّع الـ APK والموقع (GitHub)
1. اعمل Repository جديد على GitHub (مثلاً `soc-app`) وارفع كل الملفات والفولدرات دي.
2. البناء بيشتغل لوحده (تبويب **Actions**). بعد حوالي 5 دقايق هتلاقي ملف `SOC.apk` في **Releases** — نزّله على الموبايل وسطّبه.
3. للموقع: Settings ← Pages ← Source = **GitHub Actions**. بعد البناء الجاي الموقع هيبقى على
   `https://اسم-حسابك.github.io/soc-app/`
4. لازم تضيف الدومين ده في Firebase ← Authentication ← Settings ← **Authorized domains**.

أي تعديل ترفعه على GitHub بيطلع APK جديد لوحده.
