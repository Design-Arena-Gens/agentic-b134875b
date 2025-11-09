"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";

const verse = {
  chapter: 1,
  verse: 1,
  devanagari:
    "धृतराष्ट्र उवाच\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः |\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ||",
  transliteration:
    "dhṛtarāṣṭra uvāca\ndharmakṣetre kurukṣetre samavetā yuyutsavaḥ |\nmāmakāḥ pāṇḍavāś caiva kim akurvata sañjaya ||",
  translation:
    "Dhritarashtra said: O Sanjaya, gathered on the holy field of Kurukshetra and eager for battle, what did my sons and the sons of Pandu do?",
};

const synonyms = [
  {
    sanskrit: "धर्मक्षेत्रे",
    transliteration: "dharma-kṣetre",
    meaning: "in the land aligned with righteousness",
  },
  {
    sanskrit: "कुरुक्षेत्रे",
    transliteration: "kuru-kṣetre",
    meaning: "upon the field of the Kuru dynasty",
  },
  {
    sanskrit: "समवेताḥ",
    transliteration: "samavetāḥ",
    meaning: "assembled together",
  },
  {
    sanskrit: "युयुत्सवः",
    transliteration: "yuyutsavaḥ",
    meaning: "desiring to wage war",
  },
  {
    sanskrit: "मामकाः",
    transliteration: "māmakāḥ",
    meaning: "my own sons",
  },
  {
    sanskrit: "पाण्डवाः",
    transliteration: "pāṇḍavāḥ",
    meaning: "the sons of Pandu",
  },
  {
    sanskrit: "च",
    transliteration: "ca",
    meaning: "and",
  },
  {
    sanskrit: "एव",
    transliteration: "eva",
    meaning: "indeed",
  },
  {
    sanskrit: "किम्",
    transliteration: "kim",
    meaning: "what",
  },
  {
    sanskrit: "अकुर्वत",
    transliteration: "akurvata",
    meaning: "did they do",
  },
  {
    sanskrit: "सञ्जय",
    transliteration: "sañjaya",
    meaning: "O Sanjaya",
  },
];

const insightPanels = [
  {
    title: "Anxious Kingship",
    summary:
      "The blind king depends on Sanjaya's vision, revealing his insecurity before the war begins.",
    points: [
      "Dhritarashtra's blindness hints at moral blindness.",
      "He fears the sanctity of the field might embolden the Pandavas.",
      "The question exposes attachment to his sons over dharma.",
    ],
  },
  {
    title: "Kuru Family Fracture",
    summary:
      "Kurukshetra is both homeland and battleground, amplifying the tragedy of a family at war.",
    points: [
      "The Kuru lineage faces itself—cousins divided into rival armies.",
      "Calling the Pandavas by lineage recognizes their rightful claim.",
      "Gathering on ancestral soil deepens the emotional stakes.",
    ],
  },
  {
    title: "Sanctity vs. Strategy",
    summary:
      "Dhritarashtra wrestles with the clash between a sacred setting and ruthless ambitions.",
    points: [
      "Kurukshetra's sanctity is expected to favor the righteous.",
      "The inquiry masks a hope that the Pandavas might hesitate.",
      "It sets the tone for the Gita's exploration of duty and conscience.",
    ],
  },
];

const timeline = [
  {
    title: "Prelude to War",
    detail:
      "Both armies fulfil their vows to assemble after failed peace talks, lining the plains with 18 divisions of warriors.",
  },
  {
    title: "Dhritarashtra's Inquiry",
    detail:
      "Unable to witness the battlefield, the blind monarch turns to Sanjaya, whose divine sight allows real-time narration.",
  },
  {
    title: "Moral Crossroads",
    detail:
      "Standing on holy ground, the warriors confront a deeper question: can violence uphold righteousness?",
  },
];

const reflections = [
  "Dhritarashtra frames the war as 'us versus them', hinting at his partiality.",
  "The verse foreshadows the Gita's central conflict between duty, family, and righteousness.",
  "Sanjaya's role as seer and narrator anchors the dialogue that follows.",
];

export default function Home() {
  const [showTransliteration, setShowTransliteration] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);

  const groupedSynonyms = useMemo(() => {
    const chunkSize = 3;
    const chunks = [];
    for (let i = 0; i < synonyms.length; i += chunkSize) {
      chunks.push(synonyms.slice(i, i + chunkSize));
    }
    return chunks;
  }, []);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.kicker}>
          Bhagavad Gita · अध्याय १ · श्लोक {verse.verse}
        </span>
        <h1>Dhritarashtra&apos;s Question at Kurukshetra</h1>
        <p className={styles.lead}>
          The Mahabharata&apos;s most pivotal dialogue opens with uncertainty.
          A worried king seeks clarity as two sides of the same family assemble
          on sacred ground, ready to fight.
        </p>
        <div className={styles.toggleBar}>
          <button
            className={showTransliteration ? styles.toggleActive : styles.toggle}
            type="button"
            onClick={() => setShowTransliteration((prev) => !prev)}
          >
            {showTransliteration ? "Hide Transliteration" : "Show Transliteration"}
          </button>
          <button
            className={showTranslation ? styles.toggleActive : styles.toggle}
            type="button"
            onClick={() => setShowTranslation((prev) => !prev)}
          >
            {showTranslation ? "Hide Translation" : "Show Translation"}
          </button>
        </div>
      </section>

      <section className={styles.verseCard}>
        <div className={styles.verseHeader}>
          <span className={styles.verseBadge}>1 · 1</span>
          <div>
            <p className={styles.verseMeta}>Speaker: Dhritarashtra</p>
            <p className={styles.verseMeta}>Audience: Sanjaya</p>
          </div>
        </div>
        <blockquote className={styles.devanagari}>
          {verse.devanagari.split("\n").map((line) => (
            <span key={line}>{line}</span>
          ))}
        </blockquote>
        {showTransliteration && (
          <pre className={styles.transliteration}>{verse.transliteration}</pre>
        )}
        {showTranslation && (
          <p className={styles.translation}>{verse.translation}</p>
        )}
        <p className={styles.contextNote}>
          Dhritarashtra&apos;s opening line is more than a question—it is the
          confession of a king torn between paternal love and the moral order he
          is sworn to uphold.
        </p>
      </section>

      <section className={styles.synonymSection}>
        <header className={styles.sectionHeader}>
          <h2>Word-by-Word Insight</h2>
          <p>
            Each Sanskrit term carries narrative weight, revealing Dhritarashtra&apos;s
            priorities and apprehensions.
          </p>
        </header>
        <div className={styles.wordMatrix}>
          {groupedSynonyms.map((group, idx) => (
            <div className={styles.wordColumn} key={`synonym-group-${idx}`}>
              {group.map((entry) => (
                <article className={styles.wordCard} key={entry.sanskrit}>
                  <span className={styles.wordSanskrit}>{entry.sanskrit}</span>
                  <span className={styles.wordTransliteration}>
                    {entry.transliteration}
                  </span>
                  <p className={styles.wordMeaning}>{entry.meaning}</p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className={styles.insights}>
        {insightPanels.map((panel) => (
          <article className={styles.insightCard} key={panel.title}>
            <h3>{panel.title}</h3>
            <p className={styles.insightSummary}>{panel.summary}</p>
            <ul>
              {panel.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className={styles.timeline}>
        <header className={styles.sectionHeader}>
          <h2>Context Timeline</h2>
          <p>
            Dhritarashtra&apos;s apprehension builds across a sequence of events
            that culminate in this moment of inquiry.
          </p>
        </header>
        <ol className={styles.timelineList}>
          {timeline.map((item) => (
            <li key={item.title}>
              <div className={styles.marker} aria-hidden />
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.reflection}>
        <h2>Reflection Prompts</h2>
        <ul>
          {reflections.map((reflection) => (
            <li key={reflection}>{reflection}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
