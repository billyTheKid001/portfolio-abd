import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, Headphones, Globe, FolderKanban, Server, User,
  X, ChevronLeft, ChevronRight, Images, FileText, Camera,
  CheckCircle, Clock, AlertCircle, ChevronDown, Printer,
  BookOpen, Briefcase, ExternalLink, Zap,
} from "lucide-react";

/* ── Image imports ── */
import c1_1 from "../assets/C1/c1_1.png";
import c1_2 from "../assets/C1/c1_2.png";
import c1_3 from "../assets/C1/c1_3.png";
import c1_4 from "../assets/C1/c1_4.png";
import c1_5 from "../assets/C1/c1_5.png";
import c1_6 from "../assets/C1/c1_6.png";
import c1_7 from "../assets/C1/c1_7.png";
import c1_8 from "../assets/C1/c1_8.png";
import c1_9 from "../assets/C1/c1_9.png";
import c3_1 from "../assets/C3/c3_1.png";
import c3_2 from "../assets/C3/c3_2.png";
import c5_1 from "../assets/C5/c5_1.png";
import c5_2 from "../assets/C5/c5_2.png";
import c8_1 from "../assets/C8/c8_1.png";
import c8_2 from "../assets/C8/c8_2.png";
import c8_3 from "../assets/C8/c8_3.png";
import c8_4 from "../assets/C8/c8_4.png";
import c8_5 from "../assets/C8/c8_5.png";
import portfolio from "../assets/C21/portfolio.png";
import linkedin from "../assets/C21/linkedin.png";
import veilleImg from "../assets/C20/Veille.png";
import trelloImg from "../assets/C14-C15/Trello.png";
import c13_1 from "../assets/C13/C13_page-1.jpg";
import c13_2 from "../assets/C13/C13_page-2.jpg";
import c13_3 from "../assets/C13/C13_page-3.jpg";
import c13_4 from "../assets/C13/C13_page-4.jpg";
import c16_1 from "../assets/C16/C16_page-1.jpg";
import c16_2 from "../assets/C16/C16_page-2.jpg";
import c18_1 from "../assets/C18/C18_page-1.jpg";
import c18_2 from "../assets/C18/C18_page-2.jpg";
import c18_3 from "../assets/C18/C18_page-3.jpg";
import c19_1 from "../assets/C19/GitHub.png";
import Participation from "../assets/C12/Participation.png";
import c2_1 from "../assets/C2/C2_page-1.jpg";
import c2_2 from "../assets/C2/C2_page-2.jpg";
import c2_3 from "../assets/C2/C2_page-3.jpg";
import c2_4 from "../assets/C2/C2_page-4.jpg";
import c4_1 from "../assets/C4/C4_page-1.jpg";
import c4_2 from "../assets/C4/C4_page-2.jpg";
import c4_3 from "../assets/C4/C4_page-3.jpg";
import c6_1 from "../assets/C6/C6_page-1.jpg";
import c6_2 from "../assets/C6/C6_page-2.jpg";
import c6_3 from "../assets/C6/C6_page-3.jpg";

const MDiv = motion.div;

/* ══════════════════════════════════════════════════════
   DOCUMENT HELPER COMPONENTS
══════════════════════════════════════════════════════ */
const DocH1 = ({ children }) => (
  <h3 className="text-sm font-black text-white uppercase tracking-wider border-b border-white/10 pb-2 mb-3 mt-6 first:mt-0 flex items-center gap-2">
    <span className="block w-3 h-[2px] bg-[#60A5FA]" />{children}
  </h3>
);
const DocH2 = ({ children }) => (
  <h4 className="text-xs font-bold text-[#60A5FA] uppercase tracking-wider mb-2 mt-4">{children}</h4>
);
const DocP = ({ children }) => (
  <p className="text-gray-300 text-xs leading-relaxed mb-3">{children}</p>
);
const DocList = ({ items }) => (
  <ul className="space-y-1.5 mb-4">
    {items.map((item, i) => (
      <li key={i} className="flex items-start gap-2 text-gray-300 text-xs">
        <span className="text-[#60A5FA] shrink-0 mt-0.5 font-bold">→</span>
        <span dangerouslySetInnerHTML={{ __html: item }} />
      </li>
    ))}
  </ul>
);
const DocTable = ({ headers, rows }) => (
  <div className="overflow-x-auto mb-4 rounded-xl border border-white/[0.08]">
    <table className="w-full text-xs">
      <thead>
        <tr className="bg-white/[0.05]">
          {headers.map((h, i) => (
            <th key={i} className="px-3 py-2 text-left font-bold text-gray-400 uppercase tracking-wide border-b border-white/[0.06] whitespace-nowrap">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? "" : "bg-white/[0.02]"}>
            {row.map((cell, j) => (
              <td key={j} className="px-3 py-2 text-gray-300 border-b border-white/[0.04]" dangerouslySetInnerHTML={{ __html: cell }} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
const DocStep = ({ num, title, children }) => (
  <div className="flex gap-3 mb-3">
    <span className="shrink-0 w-5 h-5 rounded-full bg-[#60A5FA]/20 border border-[#60A5FA]/40 text-[#60A5FA] text-[10px] font-black flex items-center justify-center mt-0.5">{num}</span>
    <div>
      <p className="text-white text-xs font-semibold mb-0.5">{title}</p>
      <div className="text-gray-400 text-xs leading-relaxed">{children}</div>
    </div>
  </div>
);
const DocAlert = ({ color = "blue", children }) => {
  const c = { blue: "border-blue-500/30 bg-blue-500/5 text-blue-300", amber: "border-amber-500/30 bg-amber-500/5 text-amber-300", green: "border-green-500/30 bg-green-500/5 text-green-300", red: "border-red-500/30 bg-red-500/5 text-red-300" };
  return <div className={`border rounded-xl px-4 py-3 text-xs mb-4 leading-relaxed ${c[color]}`} dangerouslySetInnerHTML={{ __html: children }} />;
};
const DocCode = ({ children }) => (
  <code className="block font-mono text-[11px] bg-[#0a1020] border border-white/[0.08] rounded-lg px-3 py-2 text-green-400 mb-2 overflow-x-auto">{children}</code>
);

/* ══════════════════════════════════════════════════════
   DOCUMENTS RÉELS — C2, C4, C6, C13, C16, C18
══════════════════════════════════════════════════════ */
const DOCUMENTS = {
  C2_ITIL: {
    ref: "PROC-INC-001", version: "v1.0", date: "03/05/2026",
    title: "Procédure ITIL — Gestion des Incidents",
    subtitle: "Hackathon BTS SIO · GLPI 10.0.20 · Debian 12",
    content: () => (
      <div>
        <DocAlert color="blue">Référentiel <strong>ITIL v4</strong> — Pratique «Gestion des incidents». Objectif : minimiser l'impact des incidents en restaurant le service normal le plus rapidement possible.</DocAlert>
        <DocH1>1. Objet</DocH1>
        <DocP>Cette procédure définit les règles, rôles et délais de traitement des incidents affectant les services IT déployés sur l'infrastructure Hackathon (Debian 12, Apache2, GLPI 10.0.20, MariaDB).</DocP>
        <DocH1>2. Définitions</DocH1>
        <DocTable headers={["Terme", "Définition"]} rows={[["Incident", "Interruption non planifiée ou dégradation d'un service IT"],["SLA", "Service Level Agreement — délai de traitement contractuel"],["Escalade", "Transfert vers un niveau de support supérieur"],["GLPI", "Outil de ticketing — http://192.168.64.16"]]} />
        <DocH1>3. Acteurs et responsabilités</DocH1>
        <DocTable headers={["Acteur", "Rôle"]} rows={[["Utilisateur", "Détecte l'incident, crée le ticket dans GLPI"],["Technicien N1", "Qualifie, diagnostique, tente résolution (≤ 30 min)"],["Technicien N2", "Prend en charge les tickets escaladés"],["Administrateur", "Supervise, gère les exceptions, valide les clôtures"]]} />
        <DocH1>4. Processus de traitement</DocH1>
        <DocStep num={1} title="Signalement">L'utilisateur crée un ticket dans GLPI : <em>Assistance → Créer un ticket</em>. Il renseigne titre, description, urgence estimée.</DocStep>
        <DocStep num={2} title="Qualification (N1)">Le technicien N1 attribue la priorité selon la matrice ci-dessous et débute le diagnostic.</DocStep>
        <DocStep num={3} title="Résolution ou escalade">N1 tente de résoudre en ≤ 30 min. Si échec → escalade N2 avec documentation du diagnostic.</DocStep>
        <DocStep num={4} title="Clôture">Documentation de la solution dans GLPI, notification utilisateur, clôture du ticket.</DocStep>
        <DocH1>5. Matrice de priorité et SLA</DocH1>
        <DocTable headers={["Priorité", "Critères", "Réponse", "Résolution"]} rows={[["🔴 P1 Critique","Service totalement indisponible, tous utilisateurs impactés","&lt; 1h","&lt; 4h"],["🟠 P2 Haute","Dégradation majeure, plusieurs utilisateurs","&lt; 4h","&lt; 8h"],["🟡 P3 Moyenne","Impact limité, contournement possible","&lt; 8h","&lt; 24h"],["🟢 P4 Basse","Inconfort mineur, non bloquant","&lt; 24h","&lt; 72h"]]} />
        <DocH1>6. Indicateurs de performance (KPIs)</DocH1>
        <DocList items={["Taux de résolution N1 : cible <strong>&gt; 70%</strong> des incidents","Respect des SLA : cible <strong>&gt; 95%</strong> des tickets dans les délais","Satisfaction utilisateur : cible <strong>&gt; 4/5</strong> (évaluation à clôture)","Délai moyen de résolution : cible <strong>&lt; 4h</strong> tous niveaux confondus"]} />
        <DocAlert color="green">✓ Procédure opérationnelle sur GLPI 10.0.20 — http://192.168.64.16</DocAlert>
      </div>
    ),
  },
  C2_ISO: {
    ref: "PROC-QUAL-001", version: "v1.0", date: "03/05/2026",
    title: "Procédure Qualité — ISO 9001:2015",
    subtitle: "Système de Management de la Qualité · Services IT",
    content: () => (
      <div>
        <DocAlert color="blue">Norme <strong>ISO 9001:2015</strong> — Système de Management de la Qualité (SMQ) appliqué aux services informatiques, en conformité avec les exigences de la norme internationale.</DocAlert>
        <DocH1>1. Politique qualité</DocH1>
        <DocP>L'équipe IT s'engage à fournir des services fiables, documentés et mesurables, dans une démarche d'amélioration continue. Chaque service déployé doit répondre aux besoins utilisateurs et être maintenu selon des standards définis.</DocP>
        <DocH1>2. Domaine d'application</DocH1>
        <DocList items={["Services hébergés : GLPI, Apache2, PHP 8.3, MariaDB 10.11.8 sur Debian 12","Gestion des incidents et demandes utilisateurs (GLPI)","Documentation technique et procédures opérationnelles","Formation et accompagnement des utilisateurs"]} />
        <DocH1>3. Indicateurs qualité (KPIs)</DocH1>
        <DocTable headers={["Indicateur","Objectif","Mesure","Fréquence"]} rows={[["Disponibilité services","&gt; 99%","Uptime Apache/MariaDB","Mensuelle"],["Délai moyen résolution","&lt; 4h","Statistiques GLPI","Mensuelle"],["Taux de satisfaction","&gt; 85%","Enquête post-ticket","Trimestrielle"],["Résolution N1","&gt; 70%","Rapport GLPI","Mensuelle"],["Documentation à jour","100%","Audit interne","Trimestrielle"]]} />
        <DocH1>4. Amélioration continue — Roue de Deming (PDCA)</DocH1>
        <DocTable headers={["Phase","Action"]} rows={[["PLAN","Définir les objectifs qualité, identifier les risques"],["DO","Déployer les services, former les utilisateurs, documenter"],["CHECK","Mesurer les KPIs, analyser les incidents récurrents"],["ACT","Corriger les écarts, mettre à jour les procédures"]]} />
        <DocH1>5. Gestion documentaire</DocH1>
        <DocList items={["Chaque procédure comporte : référence, version, date, auteur","Les mises à jour sont tracées (historique des versions)","Les procédures sont accessibles dans la base de connaissances GLPI","Revue documentaire trimestrielle obligatoire"]} />
        <DocAlert color="amber">⚠️ Toute modification d'une procédure doit être validée par l'administrateur et documentée dans GLPI avant diffusion.</DocAlert>
      </div>
    ),
  },
  C4_PRA: {
    ref: "PRA-001", version: "v1.0", date: "03/05/2026",
    title: "Plan de Reprise d'Activité (PRA)",
    subtitle: "Infrastructure Debian 12 / GLPI 10.0.20 · Mac M4 UTM",
    content: () => (
      <div>
        <DocAlert color="amber">🔴 Document confidentiel — Infrastructure : Debian GNU/Linux 13 (trixie) ARM64 via UTM sur Mac M4 · IP : <strong>192.168.64.16</strong></DocAlert>
        <DocH1>1. Périmètre et services critiques</DocH1>
        <DocTable headers={["Service","Version","Criticité","RTO","RPO"]} rows={[["GLPI (ITSM)","10.0.20","Critique","2h","24h"],["Apache2 (Web)","2.4.x","Critique","1h","N/A"],["MariaDB (BDD)","10.11.8","Critique","2h","24h"],["PHP","8.3.30","Haute","1h","N/A"],["VM Debian 12","ARM64/UTM","Critique","4h","24h"]]} />
        <DocH1>2. Scénario A — Corruption base de données GLPI</DocH1>
        <DocP><strong>Impact :</strong> GLPI inaccessible · <strong>Symptômes :</strong> Erreur 500, logs MariaDB anormaux</DocP>
        <DocStep num={1} title="Vérifier la dernière sauvegarde"><DocCode>ls -lh /home/backup_glpi_*.sql</DocCode></DocStep>
        <DocStep num={2} title="Arrêter Apache2"><DocCode>systemctl stop apache2</DocCode></DocStep>
        <DocStep num={3} title="Recréer la base"><DocCode>{"mysql -u root -p -e \"DROP DATABASE glpi; CREATE DATABASE glpi CHARACTER SET utf8mb4;\""}</DocCode></DocStep>
        <DocStep num={4} title="Restaurer la sauvegarde"><DocCode>{"mysql -u root -p glpi < /home/backup_glpi_YYYYMMDD.sql"}</DocCode></DocStep>
        <DocStep num={5} title="Relancer et valider"><DocCode>systemctl start apache2 && curl -I http://192.168.64.16</DocCode></DocStep>
        <DocH1>3. Scénario B — Panne VM Debian (UTM)</DocH1>
        <DocList items={["<strong>Impact :</strong> Tous services indisponibles · RTO 4h","1) Ouvrir UTM → Restaurer le dernier snapshot de la VM","2) Vérifier : <code style='font-size:10px;background:rgba(255,255,255,0.06);padding:1px 4px;border-radius:3px'>systemctl status apache2 mariadb</code>","3) Tester l'accès GLPI sur http://192.168.64.16"]} />
        <DocH1>4. Plan de sauvegarde</DocH1>
        <DocTable headers={["Élément","Méthode","Fréquence","Rétention","Destination"]} rows={[["BDD GLPI","mysqldump","Quotidienne 02h00","7 jours","/home/backup_glpi_*.sql"],["Snapshot VM","UTM snapshot","Hebdomadaire","2 versions","UTM (Mac M4)"],["Fichiers GLPI","tar.gz","Hebdomadaire","4 semaines","/home/backup_files/"]]} />
        <DocAlert color="green">✓ Sauvegarde testée le 03/05/2026 — backup_glpi_20260503.sql (1.4 Mo) restaurée en 2 minutes.</DocAlert>
      </div>
    ),
  },
  C4_PCA: {
    ref: "PCA-001", version: "v1.0", date: "03/05/2026",
    title: "Plan de Continuité d'Activité (PCA)",
    subtitle: "Infrastructure Debian 12 / GLPI 10.0.20",
    content: () => (
      <div>
        <DocAlert color="blue">Le PCA complète le PRA en définissant comment <strong>maintenir</strong> un niveau minimal de service pendant un incident, avant la reprise complète.</DocAlert>
        <DocH1>1. Mesures préventives</DocH1>
        <DocList items={["Sauvegardes quotidiennes automatisées via cron (02h00)","Snapshots UTM hebdomadaires de la VM Debian","Monitoring des services : <code style='font-size:10px;background:rgba(255,255,255,0.06);padding:1px 4px;border-radius:3px'>systemctl status apache2 mariadb</code>","Documentation à jour dans GLPI","Comptes de secours admin configurés dans GLPI"]} />
        <DocH1>2. Procédures de maintien en conditions opérationnelles</DocH1>
        <DocH2>Si GLPI est indisponible</DocH2>
        <DocTable headers={["Action","Responsable","Délai max"]} rows={[["Notifier les utilisateurs par email","Admin","15 min"],["Activer suivi temporaire (fichier Excel partagé)","Technicien","30 min"],["Diagnostiquer et escalader","Admin","1h"],["Restaurer depuis sauvegarde (cf. PRA)","Admin","2h"]]} />
        <DocH2>Si Apache2 est indisponible</DocH2>
        <DocList items={["Redémarrage : <code style='font-size:10px;background:rgba(255,255,255,0.06);padding:1px 4px;border-radius:3px'>systemctl restart apache2</code>","Vérification logs : <code style='font-size:10px;background:rgba(255,255,255,0.06);padding:1px 4px;border-radius:3px'>journalctl -u apache2 --since '5 min ago'</code>"]} />
        <DocH1>3. Tests du PCA</DocH1>
        <DocTable headers={["Test","Fréquence","Dernière exécution","Résultat"]} rows={[["Restauration sauvegarde BDD","Mensuelle","03/05/2026","✅ OK (2 min)"],["Redémarrage services","Mensuelle","03/05/2026","✅ OK"],["Simulation panne réseau","Trimestrielle","03/05/2026","✅ OK"],["Restauration snapshot VM","Trimestrielle","À planifier","⏳ Pending"]]} />
        <DocH1>4. Indicateurs de suivi</DocH1>
        <DocList items={["Disponibilité mensuelle des services : cible <strong>&gt; 99%</strong>","Temps de restauration moyen : cible <strong>&lt; 2h</strong>","Fréquence des incidents P1/P2 : cible <strong>&lt; 1/mois</strong>"]} />
      </div>
    ),
  },
  C6_CHARTE: {
    ref: "CHART-INFO-001", version: "v1.0", date: "03/05/2026",
    title: "Charte Informatique",
    subtitle: "Entreprise fictive Hackathon BTS SIO",
    content: () => (
      <div>
        <DocH2>Préambule</DocH2>
        <DocP>Cette charte définit les règles d'utilisation du système d'information (SI). Elle s'applique à tout le personnel : salariés, stagiaires, alternants, prestataires. La signature vaut acceptation. Tout manquement expose à des sanctions disciplinaires.</DocP>
        <DocH1>Article 1 — Utilisation des équipements</DocH1>
        <DocList items={["Les équipements sont fournis à titre professionnel.","L'usage personnel est toléré raisonnablement, hors heures de travail.","Tout équipement doit être déclaré dans l'inventaire GLPI (http://192.168.64.16).","Aucun équipement personnel ne peut être connecté au réseau sans autorisation."]} />
        <DocH1>Article 2 — Accès et mots de passe</DocH1>
        <DocList items={["Chaque utilisateur dispose d'un compte GLPI nominatif, <strong>non partageable</strong>.","Exigences : ≥ 12 caractères, majuscules + minuscules + chiffres + symboles.","Renouvellement obligatoire tous les 90 jours.","Verrouillage de session dès l'absence du poste (Win+L / Cmd+Ctrl+Q).","Tout compte inactif &gt; 30 jours est désactivé par l'administrateur."]} />
        <DocH1>Article 3 — Internet et messagerie</DocH1>
        <DocList items={["Interdiction : sites illégaux, haineux, pornographiques, téléchargements illégaux.","La messagerie professionnelle est réservée aux communications d'entreprise.","Ne jamais ouvrir une pièce jointe suspecte (phishing).","Téléchargement de logiciels non validés par l'IT : <strong>strictement interdit</strong>."]} />
        <DocH1>Article 4 — Protection des données (RGPD)</DocH1>
        <DocList items={["Les données clients et internes sont confidentielles — toute divulgation est sanctionnée.","Conformité au RGPD (UE 2016/679) obligatoire.","Stockage sur supports non sécurisés (USB personnel, cloud non autorisé) : interdit.","Tout traitement de données personnelles doit être déclaré au DPO."]} />
        <DocH1>Article 5 — Signalement des incidents</DocH1>
        <DocList items={["Tout incident (virus, accès suspect, perte d'équipement) → ticket GLPI immédiat.","Procédure : Assistance → Créer un ticket → Type : Incident de sécurité → Priorité : Haute.","Ne jamais tenter de résoudre seul un incident de sécurité."]} />
        <DocH1>Article 6 — Sanctions</DocH1>
        <DocP>Les infractions graves (divulgation de données, intrusion informatique) peuvent donner lieu à des poursuites judiciaires conformément aux articles 323-1 et suivants du Code pénal.</DocP>
        <div className="mt-6 p-4 border border-white/[0.1] rounded-xl bg-white/[0.01]">
          <p className="text-[10px] text-gray-500 mb-3 uppercase tracking-wider">Signature — Lu et approuvé</p>
          <div className="grid grid-cols-2 gap-6">
            {["Nom et prénom", "Date et signature"].map(label => (
              <div key={label}>
                <p className="text-[10px] text-gray-400 mb-2">{label} :</p>
                <div className="border-b border-white/20 h-7" />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  C13_CDC: {
    ref: "CDC-HACK-001", version: "v1.0", date: "29/04/2026",
    title: "Cahier des Charges — Hackathon BTS SIO",
    subtitle: "Déploiement infrastructure IT · Entreprise fictive",
    content: () => (
      <div>
        <DocH1>1. Contexte et objectif</DocH1>
        <DocP>Hackathon BTS SIO option SLAM : simuler le déploiement d'une infrastructure IT complète pour une PME fictive. L'équipe (1 personne) joue les rôles : Chef de projet, Infra, Support, Dev, Marketing.</DocP>
        <DocH2>Objectif général</DocH2>
        <DocP>Déployer en 3 semaines une infrastructure opérationnelle incluant : serveur Debian, ITSM GLPI, gestion des tickets, inventaire du parc, et documentation complète (ITIL, ISO 9001, Charte, PRA/PCA).</DocP>
        <DocH1>2. Périmètre technique</DocH1>
        <DocTable headers={["Service","Solution","Version","Statut"]} rows={[["Virtualisation","UTM sur Mac M4","Latest","✅ Opérationnel"],["OS serveur","Debian GNU/Linux","13 (trixie) ARM64","✅ Opérationnel"],["Serveur web","Apache2","2.4.x","✅ Opérationnel"],["Langage serveur","PHP","8.3.30","✅ Opérationnel"],["Base de données","MariaDB","10.11.8","✅ Opérationnel"],["ITSM / Inventaire","GLPI","10.0.20","✅ Opérationnel"],["IP serveur","192.168.64.16","Réseau privé UTM","✅ Accessible"]]} />
        <DocH1>3. Livrables et planning</DocH1>
        <DocTable headers={["Livrable","Compétence(s)","Délai","Statut"]} rows={[["Serveur Debian 12 configuré","C1, C17","Semaine 1","✅ Livré"],["GLPI installé et paramétré","C1, C7, C17","Semaine 1","✅ Livré"],["Inventaire parc informatique","C1","Semaine 1","✅ Livré"],["Gestion des profils GLPI","C3","Semaine 1","✅ Livré"],["Sauvegardes BDD configurées","C5","Semaine 2","✅ Livré"],["Procédures ITIL + ISO 9001","C2","Semaine 2","✅ Livré"],["Charte informatique","C6","Semaine 2","✅ Livré"],["PRA / PCA","C4","Semaine 2","✅ Livré"],["Incident réseau traité","C8","Semaine 2","✅ Livré"],["Scénarios de tests","C16","Semaine 3","✅ Livré"],["Guide utilisateur GLPI","C18","Semaine 3","✅ Livré"]]} />
        <DocH1>4. Analyse des risques</DocH1>
        <DocTable headers={["Risque","Probabilité","Impact","Mitigation"]} rows={[["Panne VM UTM","Faible","Élevé","Snapshots UTM hebdomadaires"],["Corruption BDD","Faible","Élevé","mysqldump quotidien (cron 02h00)"],["Dépassement délai","Moyen","Moyen","Board Trello/Kanban"],["Perte de données","Très faible","Critique","Stratégie sauvegarde 3-2-1"]]} />
        <DocH1>5. Critères d'acceptation</DocH1>
        <DocList items={["GLPI accessible sur http://192.168.64.16 (réponse HTTP 200)","Au moins 1 ordinateur inventorié dans le parc GLPI","Au moins 1 ticket créé, traité et clôturé","Tous les documents (ITIL, ISO 9001, Charte, PRA/PCA) rédigés et versionnés","Sauvegardes testées et restauration validée"]} />
        <DocAlert color="green">✓ Tous les critères d'acceptation validés au 03/05/2026.</DocAlert>
      </div>
    ),
  },
  C16_TESTS: {
    ref: "PLAN-TEST-001", version: "v1.0", date: "03/05/2026",
    title: "Plan de Tests — GLPI 10.0.20",
    subtitle: "Tests d'intégration et d'acceptation · Debian 12",
    content: () => (
      <div>
        <DocH2>Environnement de test</DocH2>
        <DocTable headers={["Paramètre","Valeur"]} rows={[["URL","http://192.168.64.16"],["OS serveur","Debian GNU/Linux 13 (trixie) ARM64"],["Application","GLPI 10.0.20"],["Base de données","MariaDB 10.11.8"],["Navigateur","Firefox, Chromium"],["Date","03/05/2026"]]} />
        <DocH1>Cas de tests — Intégration &amp; Acceptation</DocH1>
        <DocTable headers={["ID","Test","Résultat attendu","Statut"]} rows={[["TC-001","Accès page d'accueil GLPI","Page connexion HTTP 200","✅ PASS"],["TC-002","Connexion Super-Admin","Dashboard accessible","✅ PASS"],["TC-003","Création ticket incident","Ticket #1 créé avec n° attribué","✅ PASS"],["TC-004","Traitement et clôture ticket","Statut : Clôturé, compte rendu documenté","✅ PASS"],["TC-005","Inventaire automatique (GLPI Inventory)","Machine 'debian' visible dans Parc","✅ PASS"],["TC-006","Sauvegarde BDD (mysqldump)","Fichier .sql généré (1.4 Mo)","✅ PASS"],["TC-007","Restauration BDD","Base restaurée, GLPI fonctionnel","✅ PASS"],["TC-008","Gestion profils (8 niveaux)","8 profils distincts configurés","✅ PASS"],["TC-009","Simulation incident réseau DNS","DNS corrigé, connectivité rétablie","✅ PASS"],["TC-010","Accès profil Read-Only","Lecture seule confirmée","✅ PASS"]]} />
        <DocH1>Bilan</DocH1>
        <DocTable headers={["Total","PASS","FAIL","SKIP","Taux de succès"]} rows={[["10","10","0","0","<span style='color:#4ade80;font-weight:700'>100% ✅</span>"]]} />
        <DocAlert color="green">✓ Tous les tests validés. L'infrastructure est jugée opérationnelle pour la mise en production.</DocAlert>
      </div>
    ),
  },
  C18_GUIDE: {
    ref: "GUIDE-GLPI-001", version: "v1.0", date: "03/05/2026",
    title: "Guide Utilisateur — GLPI 10.0.20",
    subtitle: "À l'attention des utilisateurs de l'entreprise",
    content: () => (
      <div>
        <DocAlert color="blue">Guide destiné aux utilisateurs finaux (non-techniciens). URL d'accès : <strong>http://192.168.64.16</strong></DocAlert>
        <DocH1>1. Se connecter</DocH1>
        <DocStep num={1} title="Ouvrir le navigateur">Firefox, Chrome ou Edge.</DocStep>
        <DocStep num={2} title="Saisir l'adresse"><DocCode>http://192.168.64.16</DocCode></DocStep>
        <DocStep num={3} title="S'identifier">Entrer identifiant + mot de passe fournis par l'admin → cliquer <strong>«Se connecter»</strong>.</DocStep>
        <DocH1>2. Créer un ticket d'assistance</DocH1>
        <DocStep num={1} title="Aller dans Assistance"><em>Assistance → Créer un ticket</em></DocStep>
        <DocStep num={2} title="Remplir le formulaire">
          <ul className="space-y-1 mt-1">
            {["<strong>Titre :</strong> Description courte (ex: «Impossible d'accéder à internet»)","<strong>Description :</strong> Détails — quand, sur quel poste, messages d'erreur","<strong>Type :</strong> Incident (panne) ou Demande (évolution)","<strong>Urgence :</strong> Estimation de l'impact"].map((item, i) => (
              <li key={i} className="text-gray-300 text-xs" dangerouslySetInnerHTML={{ __html: `• ${item}` }} />
            ))}
          </ul>
        </DocStep>
        <DocStep num={3} title="Joindre une capture (optionnel)">Cliquer «Déposer des fichiers» pour ajouter une capture d'écran.</DocStep>
        <DocStep num={4} title="Envoyer"><strong>«Envoyer le message»</strong> → Email de confirmation avec le n° de ticket.</DocStep>
        <DocH1>3. Suivre mon ticket</DocH1>
        <DocList items={["<em>Assistance → Mes tickets</em> : liste complète de vos tickets","Cliquer sur un ticket pour voir l'avancement et les réponses","Statuts : Nouveau → En cours → En attente → Clôturé","Vous pouvez ajouter des informations en répondant dans le fil"]} />
        <DocH1>4. Bonnes pratiques</DocH1>
        <DocTable headers={["À faire ✓","À éviter ✗"]} rows={[["Décrire précisément le problème","Créer plusieurs tickets pour le même problème"],["Joindre une capture d'écran si visuel","Partager son mot de passe GLPI"],["Consulter la base de connaissances d'abord","Résoudre seul un problème de sécurité"],["Mettre à jour le ticket si la situation évolue","Contacter le technicien hors GLPI"]]} />
        <DocH1>5. Support</DocH1>
        <DocList items={["Email : support@entreprise.fr","Téléphone : 01 XX XX XX XX (9h-18h, lun-ven)","GLPI : http://192.168.64.16"]} />
      </div>
    ),
  },
};

/* ══════════════════════════════════════════════════════
   UI COMPONENTS
══════════════════════════════════════════════════════ */

function Badge({ label, color = "blue" }) {
  const s = { blue: "bg-blue-500/10 border-blue-500/25 text-blue-400", purple: "bg-purple-500/10 border-purple-500/25 text-purple-400", green: "bg-green-500/10 border-green-500/25 text-green-400", amber: "bg-amber-500/10 border-amber-500/25 text-amber-400", cyan: "bg-cyan-500/10 border-cyan-500/25 text-cyan-400", pink: "bg-pink-500/10 border-pink-500/25 text-pink-400" };
  return <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold border ${s[color]}`}>{label}</span>;
}

function StatusBadge({ status }) {
  const cfg = {
    validated: { icon: CheckCircle, label: "Validé", cls: "text-green-400 bg-green-500/10 border-green-500/25" },
    documented: { icon: FileText, label: "Documenté", cls: "text-blue-400 bg-blue-500/10 border-blue-500/25" },
    inprogress: { icon: Clock, label: "En cours", cls: "text-amber-400 bg-amber-500/10 border-amber-500/25" },
    todo: { icon: AlertCircle, label: "À compléter", cls: "text-gray-500 bg-white/5 border-white/10" },
  };
  const { icon: Icon, label, cls } = cfg[status] || cfg.todo;
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border ${cls}`}>
      <Icon size={9} />{label}
    </span>
  );
}

/* ── Screenshot placeholder zone ── */
function ScreenZone({ instruction, detail }) {
  return (
    <div className="mt-3 rounded-xl border-2 border-dashed border-[#60A5FA]/20 bg-[#60A5FA]/[0.02] p-4">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#60A5FA]/10 border border-[#60A5FA]/20 flex items-center justify-center shrink-0">
          <Camera size={14} className="text-[#60A5FA]" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-[#60A5FA] uppercase tracking-wider mb-1">📸 Zone capture d'écran</p>
          <p className="text-white text-xs font-medium mb-0.5">{instruction}</p>
          {detail && <p className="text-gray-500 text-[11px] leading-relaxed">{detail}</p>}
        </div>
      </div>
      <div className="mt-3 h-20 rounded-lg bg-white/[0.02] border border-white/[0.04] flex items-center justify-center">
        <p className="text-gray-600 text-[10px]">[ Insérer la capture ici ]</p>
      </div>
    </div>
  );
}

/* ── Lightbox ── */
function Lightbox({ images, captions, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);
  return (
    <MDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/92 flex flex-col items-center justify-center p-4"
      onClick={onClose}>
      <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10">
        <X size={26} />
      </button>
      <div className="relative flex items-center justify-center w-full max-w-5xl" onClick={e => e.stopPropagation()}>
        {images.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-0 -translate-x-12 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"><ChevronLeft size={18} /></button>
            <button onClick={next} className="absolute right-0 translate-x-12 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"><ChevronRight size={18} /></button>
          </>
        )}
        <MDiv key={idx} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }}
          className="rounded-xl overflow-hidden border border-white/10 shadow-2xl max-h-[75vh]">
          <img src={images[idx]} alt={captions?.[idx] ?? ""} className="max-h-[75vh] max-w-full object-contain" />
        </MDiv>
      </div>
      {captions?.[idx] && <p className="mt-4 text-xs text-gray-300 text-center max-w-xl">{captions[idx]}</p>}
      <p className="mt-1 text-[10px] text-gray-600">{idx + 1} / {images.length}</p>
      {images.length > 1 && (
        <div className="flex gap-2 mt-3">
          {images.map((src, i) => (
            <button key={i} onClick={e => { e.stopPropagation(); setIdx(i); }}
              className={`w-11 h-7 rounded overflow-hidden border-2 transition-all ${i === idx ? "border-[#60A5FA]" : "border-white/10 opacity-40 hover:opacity-70"}`}>
              <img src={src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </MDiv>
  );
}

/* ── Gallery strip ── */
function ProofGallery({ images, captions }) {
  const [lbIdx, setLbIdx] = useState(null);
  if (!images?.length) return null;
  return (
    <>
      <div className="mt-3">
        <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold mb-2 flex items-center gap-1.5">
          <Images size={10} /> Preuves photographiques ({images.length} capture{images.length > 1 ? "s" : ""})
        </p>
        <div className="flex flex-wrap gap-2">
          {images.map((src, i) => (
            <button key={i} onClick={() => setLbIdx(i)}
              className="group relative w-[72px] h-12 rounded-lg overflow-hidden border border-white/[0.08] hover:border-[#60A5FA]/40 transition-all hover:-translate-y-0.5 shadow-md">
              <img src={src} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <span className="text-white text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">Voir</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {lbIdx !== null && <Lightbox images={images} captions={captions} startIndex={lbIdx} onClose={() => setLbIdx(null)} />}
      </AnimatePresence>
    </>
  );
}

/* ── Document Modal ── */
function DocumentModal({ doc, onClose }) {
  if (!doc) return null;
  const Content = doc.content;
  return (
    <MDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[150] bg-black/80 backdrop-blur-sm flex items-start justify-center p-4 pt-16 overflow-y-auto"
      onClick={onClose}>
      <MDiv initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-3xl rounded-2xl bg-[#080f1e] border border-white/[0.08] shadow-2xl overflow-hidden mb-8"
        onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-white/[0.02] border-b border-white/[0.06] px-6 py-4 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-[10px] font-mono text-[#60A5FA] bg-[#60A5FA]/10 border border-[#60A5FA]/20 px-2 py-0.5 rounded">{doc.ref}</span>
              <span className="text-[10px] text-gray-500">{doc.version}</span>
              <span className="text-[10px] text-gray-500">{doc.date}</span>
            </div>
            <h2 className="text-white font-black text-base">{doc.title}</h2>
            <p className="text-gray-500 text-xs mt-0.5">{doc.subtitle}</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors shrink-0 mt-1">
            <X size={20} />
          </button>
        </div>
        {/* Body */}
        <div className="px-6 py-6 overflow-y-auto max-h-[65vh]">
          <Content />
        </div>
        {/* Footer */}
        <div className="border-t border-white/[0.06] px-6 py-3 flex items-center justify-between bg-white/[0.01]">
          <p className="text-[10px] text-gray-600">Document interne — Usage pédagogique BTS SIO</p>
          <button onClick={onClose} className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1.5">
            <X size={12} /> Fermer
          </button>
        </div>
      </MDiv>
    </MDiv>
  );
}

/* ── Competency Card (premium) ── */
function CompetencyCard({ code, title, status, context, missions, tags, tagColor, images, captions, screenZones, docs, accentColor, delay }) {
  const [open, setOpen] = useState(false);
  const [activeDoc, setActiveDoc] = useState(null);
  const hasProof = images?.length > 0;
  const hasScreens = screenZones?.length > 0;
  const hasDocs = docs?.length > 0;

  return (
    <>
      <MDiv initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay }} viewport={{ once: true }}
        className="rounded-xl overflow-hidden border border-white/[0.07] bg-white/[0.015] hover:border-white/[0.12] transition-all duration-200"
        style={{ borderLeft: `3px solid ${accentColor}20` }}>
        {/* Card header */}
        <button onClick={() => setOpen(v => !v)}
          className="w-full text-left flex items-center justify-between px-4 py-3.5 hover:bg-white/[0.025] transition-colors gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <span className="shrink-0 w-10 h-7 rounded-md flex items-center justify-center text-[11px] font-black border"
              style={{ background: `${accentColor}15`, borderColor: `${accentColor}30`, color: accentColor }}>
              {code}
            </span>
            <span className="text-white font-semibold text-sm leading-snug">{title}</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <StatusBadge status={status} />
            {hasProof && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-[#60A5FA]/70 bg-[#60A5FA]/10 border border-[#60A5FA]/20 rounded-full px-2 py-0.5">
                <Images size={8} />{images.length}
              </span>
            )}
            {hasDocs && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-purple-400/70 bg-purple-500/10 border border-purple-500/20 rounded-full px-2 py-0.5">
                <FileText size={8} />{docs.length}
              </span>
            )}
            <MDiv animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0">
              <ChevronDown size={15} className="text-gray-500" />
            </MDiv>
          </div>
        </button>

        {/* Card body */}
        <AnimatePresence initial={false}>
          {open && (
            <MDiv key="body" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden">
              <div className="border-t border-white/[0.05] px-4 pb-4 pt-3 space-y-3">
                {/* Context + missions */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                  <div className="md:col-span-2 bg-white/[0.02] border border-white/[0.05] rounded-xl p-3">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-2">Contexte</p>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {context.map(c => <span key={c} className="text-[10px] bg-white/[0.05] border border-white/[0.08] text-gray-300 px-2 py-0.5 rounded-full">{c}</span>)}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map(t => <Badge key={t} label={t} color={tagColor} />)}
                    </div>
                  </div>
                  <div className="md:col-span-3 bg-white/[0.02] border border-white/[0.05] rounded-xl p-3">
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold mb-2">Missions réalisées</p>
                    <ul className="space-y-1.5">
                      {missions.map((m, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-xs">
                          <CheckCircle size={11} className="shrink-0 mt-0.5" style={{ color: accentColor }} />
                          <span dangerouslySetInnerHTML={{ __html: m }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Documents + Preuves buttons row */}
                {(hasDocs || hasProof) && (
                  <div className="flex flex-wrap gap-2">
                    {docs?.map(docKey => {
                      const d = DOCUMENTS[docKey];
                      if (!d) return null;
                      return (
                        <button key={docKey} onClick={() => setActiveDoc(d)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[11px] font-semibold hover:bg-purple-500/20 transition-colors">
                          <FileText size={11} />{d.title.split("—")[0].trim()}
                        </button>
                      );
                    })}
                    {hasProof && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#60A5FA]/10 border border-[#60A5FA]/20 text-[#60A5FA] text-[11px] font-semibold">
                        <Images size={11} />{images.length} capture{images.length > 1 ? "s" : ""} disponible{images.length > 1 ? "s" : ""}
                      </span>
                    )}
                  </div>
                )}

                {/* Gallery */}
                {hasProof && <ProofGallery images={images} captions={captions} />}

                {/* Screenshot zones */}
                {hasScreens && screenZones.map((sz, i) => (
                  <ScreenZone key={i} instruction={sz.instruction} detail={sz.detail} />
                ))}
              </div>
            </MDiv>
          )}
        </AnimatePresence>
      </MDiv>

      <AnimatePresence>
        {activeDoc && <DocumentModal doc={activeDoc} onClose={() => setActiveDoc(null)} />}
      </AnimatePresence>
    </>
  );
}

/* ══════════════════════════════════════════════════════
   DATA — 22 COMPÉTENCES
══════════════════════════════════════════════════════ */
const BLOCS = [
  {
    id: "patrimoine",
    icon: Shield,
    label: "A",
    title: "Gérer le patrimoine informatique",
    gradient: "from-[#3B82F6] to-[#06B6D4]",
    accentColor: "#3B82F6",
    tagColor: "blue",
    competencies: [
      {
        code: "C1", title: "Recensement et identification des ressources numériques",
        status: "validated",
        context: ["Hackathon", "TP Educentre"],
        missions: [
          "Installation from scratch : Debian 12 ARM64 sur UTM (Mac M4)",
          "Déploiement Apache2, PHP 8.3.30, MariaDB 10.11.8",
          "Installation et configuration GLPI 10.0.20",
          "Plugin GLPI Inventory activé — recensement automatique du parc",
          "Fiche détaillée de l'ordinateur 'debian' (QEMU Virtual Machine)",
        ],
        tags: ["GLPI 10.0.20", "Debian 12", "Apache2", "PHP 8.3", "Inventaire"],
        images: [c1_1, c1_2, c1_3, c1_4, c1_5, c1_6, c1_7, c1_8, c1_9],
        captions: [
          "Apache2 Default Page — installation validée sur 192.168.64.16",
          "PHP 8.3.30 CLI — version installée sur Debian 12",
          "GLPI Setup — sélection de la langue (étape installation)",
          "Dashboard GLPI — tableau de bord opérationnel",
          "Plugin GLPI Inventory v1.4.0 activé",
          "Parc > Ordinateurs — machine Debian GNU/Linux 13 inventoriée",
          "Fiche détaillée ordinateur 'debian' (QEMU VM, 3 composants CPU)",
          "Export CSV du parc informatique (Nom, Fabricant, Modèle, OS...)",
          "Liste des packages Debian installés sur le serveur",
        ],
      },
      {
        code: "C2", title: "Exploitation des référentiels, normes et standards",
        status: "documented",
        context: ["Hackathon"],
        missions: [
          "Définition du référentiel <strong>ITIL v4</strong> : pratique Gestion des incidents",
          "Rédaction de la procédure ITIL — Gestion des incidents (PROC-INC-001)",
          "Définition de la norme <strong>ISO 9001:2015</strong> et du SMQ",
          "Rédaction de la procédure Qualité ISO 9001 (PROC-QUAL-001)",
          "Définition des KPIs et SLA pour les services IT",
        ],
        tags: ["ITIL v4", "ISO 9001:2015", "SLA", "KPIs", "SMQ"],
        docs: ["C2_ITIL", "C2_ISO"],
        images: [c2_1, c2_2, c2_3, c2_4],
        captions: [
          "Référentiels — page 1 : présentation ITIL v4 et gestion des incidents",
          "Référentiels — page 2 : procédure ITIL et matrice de priorité SLA",
          "Référentiels — page 3 : norme ISO 9001:2015 et politique qualité",
          "Référentiels — page 4 : KPIs qualité et roue de Deming (PDCA)",
        ],
      },
      {
        code: "C3", title: "Mise en place et vérification des niveaux d'habilitation",
        status: "validated",
        context: ["Hackathon", "TP Educentre"],
        missions: [
          "Configuration des <strong>8 profils GLPI</strong> : Admin, Hotliner, Observer, Read-Only, Self-Service, Super-Admin, Supervisor, Technician",
          "Vérification des droits distincts pour chaque profil",
          "Création d'un utilisateur Linux 'marketing' avec <code>adduser</code>",
          "Vérification de l'appartenance au groupe : <code>groups marketing</code>",
        ],
        tags: ["GLPI", "Profils", "Habilitations", "Linux", "adduser"],
        images: [c3_1, c3_2],
        captions: [
          "GLPI Administration > Profils — 8 niveaux d'habilitation configurés",
          "Terminal Debian — création user 'marketing' + vérification groupe",
        ],
      },
      {
        code: "C4", title: "Vérification des conditions de la continuité d'un service",
        status: "documented",
        context: ["Hackathon"],
        missions: [
          "Rédaction du <strong>Plan de Reprise d'Activité (PRA)</strong> — 3 scénarios de sinistre",
          "Définition des RTO/RPO pour chaque service critique (GLPI, Apache2, MariaDB)",
          "Procédure de restauration depuis mysqldump testée et validée",
          "Rédaction du <strong>Plan de Continuité d'Activité (PCA)</strong>",
          "Procédures de maintien en conditions opérationnelles définies",
        ],
        tags: ["PRA", "PCA", "RTO", "RPO", "Continuité"],
        docs: ["C4_PRA", "C4_PCA"],
        images: [c4_1, c4_2, c4_3],
        captions: [
          "PRA/PCA — page 1 : périmètre et services critiques avec RTO/RPO",
          "PRA/PCA — page 2 : procédures de reprise et scénarios de sinistre",
          "PRA/PCA — page 3 : plan de sauvegarde et tests de continuité",
        ],
      },
      {
        code: "C5", title: "Gestion des sauvegardes",
        status: "validated",
        context: ["Hackathon"],
        missions: [
          "Sauvegarde de la base de données GLPI avec <code>mysqldump</code>",
          "Fichier généré : <code>backup_glpi_20260503.sql</code> (1.4 Mo)",
          "Vérification du contenu SQL (MariaDB 10.11.8, base glpi)",
          "Stratégie 3-2-1 de sauvegarde définie dans le PRA",
        ],
        tags: ["mysqldump", "MariaDB", "Bash", "Cron", "Sauvegarde"],
        images: [c5_1, c5_2],
        captions: [
          "Commande mysqldump — backup_glpi_20260503.sql généré (1.4 Mo)",
          "Head du fichier SQL — structure MariaDB 10.11.8 pour la base 'glpi'",
        ],
        
      },
      {
        code: "C6", title: "Vérification du respect des règles d'utilisation des ressources",
        status: "documented",
        context: ["Hackathon"],
        missions: [
          "Rédaction de la <strong>Charte Informatique</strong> (6 articles)",
          "Articles : équipements, mots de passe, internet/email, RGPD, incidents, sanctions",
          "Conformité RGPD (UE 2016/679) intégrée",
          "Document de signature prévu pour chaque utilisateur",
        ],
        tags: ["Charte informatique", "RGPD", "Sécurité", "Conformité"],
        docs: ["C6_CHARTE"],
        images: [c6_1, c6_2, c6_3],
        captions: [
          "Charte informatique — page 1 : préambule et règles d'utilisation des équipements",
          "Charte informatique — page 2 : accès, mots de passe, internet et RGPD",
          "Charte informatique — page 3 : signalement des incidents et sanctions",
        ],
      },
    ],
  },
  {
    id: "support",
    icon: Headphones,
    label: "B",
    title: "Répondre aux incidents et demandes d'assistance",
    gradient: "from-[#8B5CF6] to-[#EC4899]",
    accentColor: "#8B5CF6",
    tagColor: "purple",
    competencies: [
      {
        code: "C7", title: "Collecte, suivi et orientation des demandes",
        status: "validated",
        context: ["Hackathon", "TP Educentre"],
        missions: [
          "Paramétrage de la gestion de tickets dans GLPI (files d'attente, SLA)",
          "Configuration des notifications email automatiques",
          "Création de catégories d'incidents (Réseau, Application, Matériel)",
          "Suivi du ticket #1 de sa création à sa clôture",
        ],
        tags: ["GLPI", "Tickets", "SLA", "Files d'attente"],
        screenZones: [
          { instruction: "GLPI > Administration > Files d'attente — configuration des SLA", detail: "Screenshot de la configuration des files d'attente GLPI avec les délais SLA définis (P1 : 1h, P2 : 4h...)." },
          { instruction: "GLPI > Assistance > Tableau de bord des tickets", detail: "Screenshot du tableau de bord montrant les tickets en cours, en attente et clôturés." },
        ],
      },
      {
        code: "C8", title: "Traitement des demandes concernant les applicatifs, services réseau et système",
        status: "validated",
        context: ["Hackathon"],
        missions: [
          "Ticket #1 créé : <em>«Impossible d'accéder à internet depuis le poste Marketing»</em>",
          "Diagnostic : test de connectivité ping → résolution de nom KO",
          "Analyse de <code>/etc/resolv.conf</code> — nameserver invalide détecté",
          "Correction du fichier <code>resolv.conf</code> avec DNS valides",
          "Test de connectivité post-correction → succès",
          "Ticket clôturé avec compte rendu complet documenté dans GLPI",
        ],
        tags: ["GLPI", "Tickets", "DNS", "resolv.conf", "Linux"],
        images: [c8_1, c8_2, c8_3, c8_4, c8_5],
        captions: [
          "Ticket #1 créé — 'Impossible d'accéder à internet depuis le poste Marketing' (priorité Haute)",
          "Ticket en cours de diagnostic — analyse de l'incident réseau",
          "Terminal — /etc/resolv.conf : nameserver 192.168.64.1 invalide détecté",
          "Correction appliquée — nouveau nameserver valide configuré",
          "Ticket #1 résolu — diagnostic DNS documenté, solution validée et clôturée",
        ],
      },
      {
        code: "C9", title: "Traitement des demandes concernant les applications",
        status: "validated",
        context: ["Entreprise BNP Paribas"],
        missions: [
          "Correction de bugs Java sur les composants Adobe Experience Manager (AEM)",
          "Migration d'une application interne vers Angular / Spring Boot",
          "Participation aux code reviews et tests unitaires (JUnit)",
          "Développement de correctifs sur tickets Jira avec documentation Git",
        ],
        tags: ["Java", "AEM", "Angular", "Spring Boot", "JUnit", "Git"],
        
      },
    ],
  },
  {
    id: "presence",
    icon: Globe,
    label: "C",
    title: "Développer la présence en ligne",
    gradient: "from-[#10B981] to-[#3B82F6]",
    accentColor: "#10B981",
    tagColor: "green",
    competencies: [
      {
        code: "C10", title: "Participation à la valorisation de l'image sur les médias numériques",
        status: "validated",
        context: ["Hackathon", "Entreprise BNP Paribas"],
        missions: [
          "Création d'une <strong>page entreprise LinkedIn</strong> pour MangaDash (entreprise fictive du Hackathon)",
          "Rédaction et publication d'un <strong>post de présentation</strong> de MangaDash sur LinkedIn",
          "Audit d'accessibilité web (WCAG 2.1) sur les composants AEM — BNP Paribas",
          "Corrections d'accessibilité : contrastes, balises alt, navigation clavier",
        ],
        tags: ["LinkedIn", "WCAG 2.1", "Accessibilité", "UX", "AEM"],
      },
      {
        code: "C11", title: "Référencement des services en ligne et mesure de visibilité",
        status: "validated",
        context: ["Hackathon", "TP Educentre"],
        missions: [
          "Intégration de Google Analytics sur le site vitrine de l'entreprise fictive",
          "Configuration des objectifs de conversion et événements",
          "Analyse des KPIs de trafic : sessions, taux de rebond, durée moyenne",
          "Recommandations SEO basiques (balises meta, structure URL)",
        ],
        tags: ["Google Analytics", "SEO", "KPIs", "GA4"],

      },
      {
        code: "C12", title: "Participation à l'évolution d'un site Web",
        status: "validated",
        context: ["Hackathon", "Entreprise BNP Paribas"],
        missions: [
          "Développement d'une fonctionnalité sur le site vitrine de l'entreprise fictive",
          "Migration de pages vers un nouveau design system AEM — BNP Paribas",
          "Gestion des packages Maven/npm, déploiement via Jenkins CI/CD",
          "Exploitation des logs et métriques d'utilisation",
        ],
        tags: ["React", "Java", "AEM", "Jenkins", "npm", "Maven"],
        images: [Participation],
      },
    ],
  },
  {
    id: "projet",
    icon: FolderKanban,
    label: "D",
    title: "Travailler en mode projet",
    gradient: "from-[#F59E0B] to-[#EF4444]",
    accentColor: "#F59E0B",
    tagColor: "amber",
    competencies: [
      {
        code: "C13", title: "Analyse des objectifs et modalités d'organisation d'un projet",
        status: "documented",
        context: ["Hackathon"],
        missions: [
          "Rédaction du <strong>Cahier des Charges</strong> complet du projet Hackathon",
          "Analyse des besoins, définition du périmètre technique",
          "Identification des livrables, délais et critères d'acceptation",
          "Analyse des risques avec matrice probabilité/impact",
        ],
        tags: ["Cahier des charges", "Analyse besoins", "Risques", "Scrum"],
        docs: ["C13_CDC"],
        images: [c13_1, c13_2, c13_3, c13_4],
        captions: [
          "Cahier des charges — page 1 : contexte et objectif du projet Hackathon",
          "Cahier des charges — page 2 : périmètre technique et livrables",
          "Cahier des charges — page 3 : planning et analyse des risques",
          "Cahier des charges — page 4 : critères d'acceptation",
        ],
      },
      {
        code: "C14", title: "Planification des activités",
        status: "validated",
        context: ["Hackathon", "Entreprise BNP Paribas"],
        missions: [
          "Création d'un <strong>board Trello Kanban</strong> avec 4 colonnes : Backlog, En cours, Review, Done",
          "Décomposition du projet Hackathon en <strong>22 cartes</strong> (une par compétence C1-C22)",
          "Attribution de <strong>labels de priorité</strong> (Haute, Moyenne, Basse) et de deadlines sur chaque carte",
          "Suivi quotidien de l'avancement : déplacement des cartes entre colonnes",
          "Utilisation de la méthode <strong>Scrum</strong> en alternance BNP Paribas (sprints de 2 semaines)",
        ],
        tags: ["Trello", "Kanban", "Scrum", "Sprint", "Planification"],
        images: [trelloImg],
        captions: ["Board Trello Kanban — colonnes Backlog / En cours / Review / Done avec les 22 cartes de compétences"],
      },
      {
        code: "C15", title: "Évaluation des indicateurs de suivi d'un projet",
        status: "validated",
        context: ["Hackathon", "Entreprise BNP Paribas"],
        missions: [
          "Définition de <strong>5 KPIs</strong> pour le suivi du Hackathon : compétences validées, documents livrés, tickets traités, taux de couverture, respect des délais",
          "Tableau de bord Trello avec <strong>Power-Up Dashboard</strong> : suivi visuel de l'avancement",
          "Analyse des écarts : 22/22 compétences couvertes, 6 documents livrés dans les délais",
          "En alternance BNP : suivi vélocité sprint, burndown chart, stories complétées par sprint",
          "Compte rendu de rétrospective : identification des points positifs et axes d'amélioration",
        ],
        tags: ["KPIs", "Vélocité", "Burndown", "Rétrospective", "Trello"],
        images: [trelloImg],
        captions: ["Board Trello — suivi KPIs : avancement par colonne, tâches complétées vs planifiées"],
      },
    ],
  },
  {
    id: "deploiement",
    icon: Server,
    label: "E",
    title: "Mettre à disposition un service informatique",
    gradient: "from-[#06B6D4] to-[#6366F1]",
    accentColor: "#06B6D4",
    tagColor: "cyan",
    competencies: [
      {
        code: "C16", title: "Test d'intégration et d'acceptation d'un service",
        status: "documented",
        context: ["Hackathon"],
        missions: [
          "Rédaction du <strong>plan de tests</strong> (PLAN-TEST-001) avec 10 cas de test",
          "Tests d'intégration : Apache2, PHP, MariaDB, GLPI — 100% PASS",
          "Tests d'acceptation : création ticket, inventaire, sauvegarde, profils",
          "Tests de non-régression après restauration de la base de données",
        ],
        tags: ["Tests d'intégration", "UAT", "GLPI", "Non-régression"],
        docs: ["C16_TESTS"],
        images: [c16_1, c16_2],
        captions: [
          "Plan de tests — page 1 : environnement et cas de test TC-001 à TC-005",
          "Plan de tests — page 2 : cas TC-006 à TC-010 et bilan 100% PASS",
        ],
      },
      {
        code: "C17", title: "Déploiement d'un service",
        status: "validated",
        context: ["Hackathon", "TP Educentre"],
        missions: [
          "Installation Debian 12 ARM64 sur UTM (Mac M4) — from scratch",
          "Déploiement et configuration Apache2, PHP 8.3, MariaDB 10.11.8",
          "Installation GLPI 10.0.20 et configuration initiale",
          "Déploiement CI/CD via Jenkins en alternance BNP Paribas",
        ],
        tags: ["Debian 12", "Apache2", "PHP 8.3", "MariaDB", "GLPI", "Jenkins"],
        images: [c1_1, c1_2, c1_3, c1_4],
        captions: [
          "Apache2 déployé et opérationnel — 192.168.64.16",
          "PHP 8.3.30 installé et fonctionnel",
          "GLPI Setup — installation en cours",
          "GLPI Dashboard — service déployé et opérationnel",
        ],
      },
      {
        code: "C18", title: "Accompagnement des utilisateurs dans la mise en place d'un service",
        status: "documented",
        context: ["Hackathon", "Entreprise BNP Paribas"],
        missions: [
          "Rédaction d'un <strong>guide utilisateur GLPI</strong> (GUIDE-GLPI-001) en 5 sections",
          "Formation de l'équipe marketing à l'utilisation de GLPI",
          "Mise en place d'un formulaire de demande d'amélioration dans GLPI",
          "Formation des développeurs juniors sur AEM — BNP Paribas",
        ],
        tags: ["Guide utilisateur", "Formation", "GLPI", "Documentation"],
        docs: ["C18_GUIDE"],
        images: [c18_1, c18_2, c18_3],
        captions: [
          "Guide utilisateur GLPI — page 1 : connexion et création de ticket",
          "Guide utilisateur GLPI — page 2 : suivi des tickets et statuts",
          "Guide utilisateur GLPI — page 3 : bonnes pratiques et support",
        ],
      },
    ],
  },
  {
    id: "professionnel",
    icon: User,
    label: "F",
    title: "Organiser son développement professionnel",
    gradient: "from-[#EC4899] to-[#8B5CF6]",
    accentColor: "#EC4899",
    tagColor: "pink",
    competencies: [
      {
        code: "C19", title: "Mettre en place son environnement d'apprentissage personnel",
        status: "validated",
        context: ["Personnel"],
        missions: [
          "Espace de travail numérique créé sur <strong>Notion</strong> avec notes, fiches et README",
          "Documentation des apprentissages BTS (fiches de révision, procédures)",
          "Environnement de développement local configuré (VS Code, Git, Node.js, Java)",
          "Profil <strong>GitHub</strong> actif avec projets personnels versionés",
        ],
        tags: ["GoodNotes", "GitHub", "VS Code", "Git", "Apprentissage"],
        images: [c19_1],
        captions: ["Profil GitHub — projets personnels versionnés et graphe de contributions"],
      },
      {
        code: "C20", title: "Mettre en œuvre des outils et stratégies de veille informationnelle",
        status: "validated",
        context: ["Personnel"],
        missions: [
          "Veille thématique sur le <strong>No-Code / Low-Code</strong> : tendances, outils, cas d'usage",
          "Sources suivies : <strong>Bubble.io Blog</strong>, <strong>Make (Integromat) Blog</strong>, <strong>Zapier Blog</strong>, <strong>Product Hunt</strong>",
          "Abonnement à la newsletter <strong>No Code France</strong> et au subreddit r/nocode",
          "Outils de veille configurés : <strong>Google Alerts</strong> (mots-clés : 'no-code tools', 'low-code platform 2026') + <strong>Feedly</strong> (dossier No-Code avec flux RSS)",
          "Chaînes YouTube suivies : <strong>No Code Family</strong>, <strong>Bubble Tutorials</strong>",
        ],
        tags: ["No-Code", "Low-Code", "Bubble", "Make", "Zapier", "Feedly", "Google Alerts"],
        images: [veilleImg],
        captions: ["Veille informationnelle No-Code — organisation des sources et articles suivis"],
      },
      {
        code: "C21", title: "Gérer son identité professionnelle",
        status: "validated",
        context: ["Personnel"],
        missions: [
          "Profil <strong>LinkedIn</strong> créé et alimenté régulièrement",
          "Mentions : formation BTS SIO SLAM Efrei, alternance BNP Paribas, stack technique",
          "Ce <strong>portfolio en ligne</strong> (React + Tailwind) comme vitrine professionnelle",
          "CV à jour avec expériences, compétences et certifications",
        ],
        tags: ["LinkedIn", "Portfolio", "CV", "Personal branding"],
        images: [portfolio, linkedin],
        
      },
      {
        code: "C22", title: "Développer son projet professionnel",
        status: "validated",
        context: ["Personnel"],
        missions: [
          "<strong>Court terme (0-1 an) :</strong> Valider le BTS SIO SLAM, décrocher un poste développeur Full-Stack",
          "<strong>Moyen terme (1-3 ans) :</strong> Poursuivre en Bachelor Développement (Efrei/Epitech), obtenir certifications AWS/Azure",
          "<strong>Long terme (3-5 ans) :</strong> Lead Developer ou Tech Lead en environnement Agile",
          "Certifications visées : Voltaire, Cisco Networking Basics, AWS Cloud Practitioner",
        ],
        tags: ["Objectifs pro", "Certifications", "Full-Stack", "Lead Dev"],
        
      },
    ],
  },
];

const FILTER_TABS = [
  { id: "all", label: "Toutes (22)", icon: BookOpen },
  { id: "patrimoine", label: "A — Patrimoine", icon: Shield },
  { id: "support", label: "B — Support", icon: Headphones },
  { id: "presence", label: "C — Présence", icon: Globe },
  { id: "projet", label: "D — Projet", icon: FolderKanban },
  { id: "deploiement", label: "E — Déploiement", icon: Server },
  { id: "professionnel", label: "F — Pro", icon: User },
];

const TOTAL = BLOCS.reduce((acc, b) => acc + b.competencies.length, 0);
const VALIDATED = BLOCS.reduce((acc, b) => acc + b.competencies.filter(c => c.status === "validated").length, 0);

/* ══════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════ */
export default function EpreuvesBTS() {
  const [activeBloc, setActiveBloc] = useState("all");

  const statusCount = { validated: 0, documented: 0, inprogress: 0, todo: 0 };
  BLOCS.forEach(b => b.competencies.forEach(c => { statusCount[c.status] = (statusCount[c.status] || 0) + 1; }));

  return (
    <section className="py-24 text-white" aria-labelledby="epreuves-title">

      {/* ── HEADER ── */}
      <MDiv initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} viewport={{ once: true }} className="mb-10">
        <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#60A5FA] uppercase mb-4">
          <span className="block w-5 h-[2px] bg-[#60A5FA]" />
          BTS SIO — Référentiel de compétences E5 &amp; E6
        </span>
        <h2 id="epreuves-title" className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          Épreuves E5 &amp; E6
        </h2>
        <p className="text-gray-400 text-base max-w-3xl mb-6">
          Couverture des <span className="text-white font-semibold">{TOTAL} compétences</span> du référentiel BTS SIO à travers le{" "}
          <span className="text-[#60A5FA] font-semibold">Hackathon</span> (formation) et mon alternance chez{" "}
          <span className="text-[#60A5FA] font-semibold">BNP Paribas</span>. Chaque carte contient les documents rédigés et les preuves photographiques.
        </p>

        {/* Progress bar */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex-1 h-2.5 bg-white/[0.06] rounded-full overflow-hidden">
            <MDiv initial={{ width: 0 }} whileInView={{ width: `${(VALIDATED / TOTAL) * 100}%` }}
              transition={{ duration: 1.2, ease: "easeOut" }} viewport={{ once: true }}
              className="h-full rounded-full bg-gradient-to-r from-[#3B82F6] to-[#818CF8]" />
          </div>
          <span className="text-xs font-bold text-[#60A5FA] shrink-0">{VALIDATED}/{TOTAL} validées</span>
        </div>

        {/* Status legend */}
        <div className="flex flex-wrap gap-3 mb-5">
          {[
            { key: "validated", icon: CheckCircle, label: "Validé (preuve)", color: "text-green-400" },
            { key: "documented", icon: FileText, label: "Document rédigé", color: "text-blue-400" },
            { key: "inprogress", icon: Clock, label: "En cours", color: "text-amber-400" },
          ].map(({ key, icon: Icon, label, color }) => (
            <div key={key} className="flex items-center gap-1.5 text-xs text-gray-400">
              <Icon size={12} className={color} />
              <span>{label} ({statusCount[key] || 0})</span>
            </div>
          ))}
        </div>

        {/* Bloc mini-stats */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {BLOCS.map(b => (
            <button key={b.id} onClick={() => setActiveBloc(activeBloc === b.id ? "all" : b.id)}
              className={`rounded-xl p-2.5 text-center transition-all border ${activeBloc === b.id ? "border-[#60A5FA]/40 bg-[#60A5FA]/5" : "bg-white/[0.02] border-white/[0.06] hover:border-white/10"}`}>
              <p className={`text-base font-black text-transparent bg-clip-text bg-gradient-to-r ${b.gradient}`}>{b.competencies.length}</p>
              <p className="text-[9px] text-gray-500 mt-0.5 leading-tight">{b.title.substring(0, 22)}</p>
            </button>
          ))}
        </div>
      </MDiv>

      {/* ── FILTER TABS ── */}
      <div className="flex flex-wrap gap-2 mb-8">
        {FILTER_TABS.map(({ id, label, icon: Icon }) => (
          <button key={id} onClick={() => setActiveBloc(id)}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[11px] font-semibold transition-all border ${
              activeBloc === id ? "bg-[#60A5FA]/15 border-[#60A5FA]/40 text-[#60A5FA]" : "bg-white/[0.02] border-white/[0.07] text-gray-400 hover:text-white hover:border-white/20"
            }`}>
            <Icon size={12} />{label}
          </button>
        ))}
      </div>

      {/* ── BLOCS ── */}
      <div className="space-y-6">
        {BLOCS.filter(b => activeBloc === "all" || activeBloc === b.id).map((bloc) => {
          const Icon = bloc.icon;
          return (
            <MDiv key={bloc.id} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }} className="rounded-2xl overflow-hidden border border-white/[0.07] shadow-xl">
              {/* Gradient top bar */}
              <div className={`h-[3px] bg-gradient-to-r ${bloc.gradient}`} />
              {/* Bloc header */}
              <div className="px-6 pt-5 pb-3 flex items-center justify-between gap-4 bg-white/[0.01]">
                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${bloc.gradient} flex items-center justify-center shadow-lg shrink-0`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-black text-transparent bg-clip-text bg-gradient-to-r ${bloc.gradient}`}>BLOC {bloc.label}</span>
                      <span className="text-gray-600 text-xs">—</span>
                      <span className="text-white font-bold text-sm">{bloc.title}</span>
                    </div>
                    <p className="text-[11px] text-gray-500 mt-0.5">{bloc.competencies.length} compétence{bloc.competencies.length > 1 ? "s" : ""} · {bloc.competencies.filter(c => c.status === "validated").length} validée{bloc.competencies.filter(c => c.status === "validated").length > 1 ? "s" : ""}</p>
                  </div>
                </div>
                <div className="hidden sm:flex gap-1">
                  {bloc.competencies.map(c => (
                    <span key={c.code} className="w-7 h-7 rounded-lg flex items-center justify-center text-[9px] font-black border"
                      style={{ background: `${bloc.accentColor}15`, borderColor: `${bloc.accentColor}30`, color: bloc.accentColor }}>
                      {c.code.replace("C", "")}
                    </span>
                  ))}
                </div>
              </div>
              {/* Competencies */}
              <div className="px-4 pb-5 pt-1 space-y-2">
                {bloc.competencies.map((c, i) => (
                  <CompetencyCard key={c.code} {...c} accentColor={bloc.accentColor} tagColor={bloc.tagColor} delay={i * 0.05} />
                ))}
              </div>
            </MDiv>
          );
        })}
      </div>

      {/* ── E5 / E6 SUMMARY ── */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { code: "E5", title: "Production et fourniture de services informatiques", coeff: 4, type: "Pratique et orale · 40 min", gradient: "from-[#3B82F6] to-[#06B6D4]", accent: "#60A5FA",
            items: ["Développement AEM — BNP Paribas (Java, Sling, Jenkins)","Migration Angular & Spring Boot","Application iOS — Stage BNP (Swift, UIKit)","Pendu des artistes — Stage Deezer (Python, API REST)"] },
          { code: "E6", title: "Parcours de professionnalisation", coeff: 3, type: "Orale · 20 min d'entretien", gradient: "from-[#8B5CF6] to-[#EC4899]", accent: "#A78BFA",
            items: ["Alternance BNP Paribas — Full-Stack (2024–2026)","Stage BNP Paribas — Développeur Mobile (2023–2024)","Stage Deezer — Développeur Python / SQL (2023)","Portfolio en ligne (React + Tailwind) + veille technologique"] },
        ].map(({ code, title, coeff, type, gradient, accent, items }) => (
          <MDiv key={code} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-white/[0.07] bg-white/[0.02] shadow-xl">
            <div className={`h-[3px] bg-gradient-to-r ${gradient}`} />
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className={`text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>{code}</span>
                <div>
                  <h3 className="text-white font-bold text-sm leading-tight">{title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Coefficient {coeff} · {type}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-gray-300 text-xs">
                    <Zap size={11} className="shrink-0 mt-0.5" style={{ color: accent }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </MDiv>
        ))}
      </div>

      {/* ── TÉLÉCHARGEMENT TABLEAU DE SYNTHÈSE ── */}
      <MDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-10 flex justify-center"
      >
        <a
          href="/Tableau_Abdoulaye_Corrige.xlsx"
          download
          className="group inline-flex items-center gap-3 px-6 py-4 rounded-2xl border border-[#60A5FA]/30 bg-[#60A5FA]/5 hover:bg-[#60A5FA]/10 hover:border-[#60A5FA]/50 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-blue-900/10"
        >
          <div className="w-9 h-9 rounded-xl bg-[#60A5FA]/15 border border-[#60A5FA]/25 flex items-center justify-center shrink-0">
            <FileText size={16} className="text-[#60A5FA]" />
          </div>
          <div className="text-left">
            <p className="text-white font-semibold text-sm">Télécharger mon tableau de synthèse</p>
            <p className="text-gray-500 text-xs mt-0.5">Tableau de compétences BTS SIO · .xlsx</p>
          </div>
          <ExternalLink size={14} className="text-[#60A5FA]/60 group-hover:text-[#60A5FA] transition-colors ml-1" />
        </a>
      </MDiv>
    </section>
  );
}