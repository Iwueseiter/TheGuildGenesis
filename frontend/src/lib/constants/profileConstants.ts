type ProfileAttestation = {
  id: string;
  badgeName: string;
  justification: string;
  issuer: string;
};

export type Profile = {
  address: string;
  name?: string;
  description?: string;
  attestationCount: number;
  attestations: ProfileAttestation[];
};

export const PROFILES: Profile[] = [
  {
    address: "0x1234...5678",
    name: "Alice Developer",
    description: "Full-stack developer passionate about Web3 and Rust",
    attestationCount: 5,
    attestations: [
      {
        id: "1",
        badgeName: "Rust",
        justification: "Rust programming",
        issuer: "0xabcd...1234",
      },
      {
        id: "2",
        badgeName: "React",
        justification: "React development",
        issuer: "0xefgh...5678",
      },
      {
        id: "3",
        badgeName: "Web3",
        justification: "Blockchain development",
        issuer: "0xijkl...9012",
      },
    ],
  },
  {
    address: "0x9876...5432",
    name: "Bob Builder",
    description: "Smart contract developer and DeFi enthusiast",
    attestationCount: 3,
    attestations: [
      {
        id: "4",
        badgeName: "Solidity",
        justification: "Smart contract development",
        issuer: "0xmnop...3456",
      },
      {
        id: "5",
        badgeName: "DeFi",
        justification: "Decentralized Finance",
        issuer: "0xqrst...7890",
      },
    ],
  },
  {
    address: "0x5555...7777",
    attestationCount: 2,
    attestations: [
      {
        id: "6",
        badgeName: "TypeScript",
        justification: "TypeScript development",
        issuer: "0xuvwx...1234",
      },
    ],
  },
];
