# ثيم ازدهار - Azdahar Theme

ثيم احترافي وحديث لمنصة سلة، مصمم خصيصاً لمتاجر معدات الصيد والرحلات البرية.

## المميزات

- 🎨 **تصميم فاخر وحديث** - واجهة مستخدم احترافية مع ألوان دافئة وجذابة
- 📱 **متجاوب تماماً** - يعمل بشكل مثالي على جميع الأجهزة (موبايل، تابلت، ديسكتوب)
- ⚡ **أداء عالي** - محسّن للسرعة والأداء
- 🌍 **دعم اللغة العربية** - مدعوم بالكامل للغة العربية
- 🎯 **تحويل عالي** - مصمم لزيادة المبيعات والتحويلات
- 🔧 **سهل التخصيص** - يمكن تخصيصه بسهولة حسب احتياجاتك

## الألوان الأساسية

- **Brand Dark**: #2F2824 (بني غامق)
- **Brand Secondary**: #87602C (بني ذهبي)
- **Pure White**: #FFFFFF (أبيض نقي)
- **Light Background**: #fcf9f6 (خلفية فاتحة)

## البنية

```
├── src/
│   ├── assets/
│   │   ├── styles/
│   │   │   └── main.css
│   │   ├── js/
│   │   │   └── main.js
│   │   └── images/
│   ├── views/
│   │   ├── components/
│   │   │   ├── header.twig
│   │   │   ├── footer.twig
│   │   │   └── top-bar.twig
│   │   ├── layouts/
│   │   │   └── main.twig
│   │   └── pages/
│   │       └── home.twig
│   └── locales/
│       └── ar.json
├── twilight.json
├── package.json
└── README.md
```

## التثبيت

```bash
# استنساخ المستودع
git clone https://github.com/yourusername/salla-theme-azdahar.git

# الانتقال إلى المجلد
cd salla-theme-azdahar

# تثبيت المتطلبات
npm install
```

## التطوير

```bash
# بدء خادم التطوير
npm run dev

# بناء الثيم
npm run build

# نشر الثيم
npm run publish
```

## المكونات الرئيسية

### 1. Hero Section
قسم البطل مع صورة خلفية جذابة وأزرار تحفيز للعمل.

### 2. Features Section
عرض الميزات الرئيسية للمتجر (الخبرة، الشحن، الأصالة، الدعم).

### 3. Categories Section
عرض فئات المنتجات بشكل جذاب مع صور خلفية.

### 4. Products Grid
شبكة المنتجات مع معلومات مفصلة والأسعار والتقييمات.

### 5. Footer
تذييل شامل مع روابط مهمة ومعلومات الاتصال.

## التخصيص

يمكنك تخصيص الثيم بسهولة من خلال:

1. **تعديل الألوان** - عدّل متغيرات CSS في `src/assets/styles/main.css`
2. **تغيير المحتوى** - عدّل ملفات Twig في `src/views/`
3. **إضافة مكونات جديدة** - أنشئ ملفات Twig جديدة في `src/views/components/`
4. **تعديل الترجمات** - عدّل ملفات JSON في `src/locales/`

## المتطلبات

- Node.js >= 14
- npm >= 6
- Salla CLI >= 2.0.0

## الترخيص

MIT License - انظر ملف LICENSE للمزيد من التفاصيل

## الدعم

للمساعدة والدعم، يرجى التواصل عبر:
- البريد الإلكتروني: mohanedkasem3301@gmail.com
- موقع سلة: https://salla.sa

## المساهمة

نرحب بالمساهمات! يرجى اتباع الخطوات التالية:

1. Fork المستودع
2. أنشئ فرع جديد (`git checkout -b feature/amazing-feature`)
3. قم بالتغييرات المطلوبة
4. Commit التغييرات (`git commit -m 'Add amazing feature'`)
5. Push إلى الفرع (`git push origin feature/amazing-feature`)
6. افتح Pull Request

---

تم إنشاء هذا الثيم بواسطة Manus AI
