// ===== إعدادات برنامج جنود المسيح S.O.C =====
// لو سبت firebase = null البرنامج هيشتغل "نسخة تجريبية" والبيانات بتتحفظ على الجهاز بس.
window.SOC_CONFIG = {
  // الصق هنا إعدادات Firebase (Project settings > Your apps > Web app > Config)
  firebase: {
    apiKey: "AIzaSyBYCAdaz05qxuFP1i3izz_Vb0jXvCCnpq8",
    authDomain: "soc-app-1ee2b.firebaseapp.com",
    projectId: "soc-app-1ee2b",
    storageBucket: "soc-app-1ee2b.firebasestorage.app",
    messagingSenderId: "707034160209",
    appId: "1:707034160209:web:72e43ccc39883e63c22c70"
  },
  /* مثال:
  firebase: {
    apiKey: "AIza....",
    authDomain: "soc-app.firebaseapp.com",
    projectId: "soc-app",
    appId: "1:123:web:abc"
  },
  */

  // Cloudinary لرفع الصور والملفات (Upload preset لازم يكون Unsigned)
  cloudinary: { cloudName: "zbkqpekr", uploadPreset: "soc_upload" },

  // الأدمن (صاحب البرنامج): يدخل بالإيميل ده ويقدر يبعت إعلانات ويحذف أي كتاب أو مستخدم
  adminEmails: ["rafatsmart47@gmail.com"],
  adminPhones: [],

  // عنوان البرنامج على الإنترنت (مثلاً https://rafatsaeed719-ui.github.io/soc-app/)
  // ده اللي بيتعمل منه لينك "شارك بروفايلي" اللي يفتح لأي حد
  publicUrl: "",

  developerSite: "https://rafatsaeed.com"
};
