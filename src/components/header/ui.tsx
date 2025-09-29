import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import c from "./styles.module.scss";

type Lang = "UZ" | "RU";

export const Header = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<Lang>("UZ");
  const [open, setOpen] = useState(false);

  // восстановление языка из localStorage
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved) {
      setLang(saved);
      i18n.changeLanguage(saved.toLowerCase()); // 👈 переключаем i18n
    }
  }, [i18n]);

  const handleSelect = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
    i18n.changeLanguage(newLang.toLowerCase());
    setOpen(false);
  };

  const flag = lang === "UZ" ? "🇺🇿" : "🇷🇺";

  return (
    <header className={c.header}>
      <div className={`${c.header__container} container`}>
        <div className={c.logoWrapper}>
          <img
            className={c.logo}
            src="https://orzumed.uz/wp-content/uploads/2024/07/subtract.png"
            alt="Orzu Medical"
          />
          <div className={c.logoText}>Orzu Medical</div>
        </div>

        <div className={c.langSwitcher}>
          <motion.button
            className={c.langButton}
            onClick={() => setOpen((prev) => !prev)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className={c.flag}>{flag}</span> {lang} ⌄
          </motion.button>

          <AnimatePresence>
            {open && (
              <motion.div
                className={c.dropdown}
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className={c.dropdownItem}
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                  onClick={() => handleSelect("UZ")}
                >
                  <span className={c.flag}>🇺🇿</span> UZ
                </motion.div>
                <motion.div
                  className={c.dropdownItem}
                  whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                  onClick={() => handleSelect("RU")}
                >
                  <span className={c.flag}>🇷🇺</span> RU
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};
