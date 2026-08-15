export const QR_SERVICE = {
  slug: "/solutions/qr-technology",
  name: "QR Technology customized services",
  eyebrow: "QR Technology",
  title: "QR systems built for how your industry actually works.",
  description:
    "AWT designs industry-specific QR programs that connect a scan to the right record, person, and next action—not a generic code on a sticker.",
  intro:
    "Most QR rollouts fail for the same reason: the code is treated as a graphic, not as an operational identifier. AWT starts from the workflow. We define what a scan must prove, who is allowed to scan it, which system of record it must update, and what happens when the scan happens offline, twice, or out of sequence. The result is a QR layer fitted to manufacturing lines, hospital stores, retail after-sales, logistics yards, campus labs, and government field inspection—not a one-size template.",
  capabilities: [
    {
      title: "Industry code schema",
      description:
        "We design identifiers that carry batch, asset, location, role, and expiry rules your teams already use—so a scan means the same thing in the plant, the warehouse, and the audit file.",
    },
    {
      title: "Scan path and permissions",
      description:
        "Operators, supervisors, vendors, and citizens rarely need the same screen. We map each scan to a role, a device type, and a allowed action, including supervised dual-scan for high-risk items.",
    },
    {
      title: "System of record integration",
      description:
        "QR data is useless if it lives in a side app. We connect scans to ERP, WMS, HIS, ticketing, and document registers so inventory, claims, and compliance stay in the systems you already run.",
    },
    {
      title: "Print, mark, and field durability",
      description:
        "Codes have to survive oil, autoclave labels, outdoor metal tags, and thermal carton print. We specify marking methods, quiet-zone rules, and reprint workflows that match the environment.",
    },
    {
      title: "Offline and exception handling",
      description:
        "Yards, basements, and shop floors drop signal. We design queued scans, conflict resolution, and exception codes so a missed network does not become a missed shipment or a lost specimen.",
    },
    {
      title: "Traceability and analytics",
      description:
        "Every scan writes a time, actor, and location trail. Recall windows shrink, warranty abuse is easier to spot, and operations can see where items stall without another spreadsheet.",
    },
  ],
  industries: [
    {
      title: "Manufacturing",
      description:
        "Part genealogy from incoming heat number to finished serial. Line-side work instructions open on the correct revision. Tool crib checkout and calibration due dates sit on the tool, not in a binder. Warranty claims start from the unit that was actually shipped.",
    },
    {
      title: "Healthcare",
      description:
        "Specimen and asset movement with a clear chain of custody. Equipment location in CSSD and wards. Consumable lots tied to expiry. Staff scan paths that support hospital procedure without turning QR into a clinical device claim.",
    },
    {
      title: "Retail & after-sales",
      description:
        "Shelf and warehouse identity that matches the SKU the POS already knows. Authenticity checks for high-value goods. Service tickets that open against the sold serial instead of a handwritten invoice number.",
    },
    {
      title: "Logistics",
      description:
        "Carton-to-trip linkage, dock door confirmation, and proof of delivery with exception codes for short, damaged, or redirected freight. Yard teams scan once; planning sees the same event.",
    },
    {
      title: "Government & public sector",
      description:
        "Asset registers for vehicles, meters, and civic equipment. Field inspection with a photo and a timestamp bound to the tagged object. Citizen document verification that points to an official record, not a PDF copy.",
    },
    {
      title: "Education",
      description:
        "Lab equipment checkout, campus access points, and certificate verification. Faculty and stores share one identity for an asset instead of three spreadsheet columns.",
    },
  ],
  process: [
    {
      title: "Map the real scan",
      description:
        "We walk the floor or field process and write down who scans, why, with which device, and which record must change. Paper steps and tribal rules are included, not ignored.",
    },
    {
      title: "Design the identifier",
      description:
        "Payload, security (signed or opaque IDs), print spec, and lifecycle: issue, replace, retire. Duplicate and counterfeit cases are decided before the first label is ordered.",
    },
    {
      title: "Build the path",
      description:
        "Role-based scan screens, APIs, and the write-back to your system of record. Pilots run on one line, one ward, or one route before a wider print run.",
    },
    {
      title: "Mark, train, and scale",
      description:
        "Print/mark vendors, operator training, reprint desks, and metrics. We stay through the first recall drill or peak season so the QR layer holds under load.",
    },
  ],
  outcomes: [
    "Faster recall and warranty decisions because the serial in the field matches the serial in the ledger.",
    "Fewer lost assets and open-ended “where is it?” calls across plants, hospitals, and campuses.",
    "Cleaner audits: a scan trail instead of reconstructed paper after the fact.",
    "Less re-keying between warehouse, service, and finance teams.",
  ],
};
