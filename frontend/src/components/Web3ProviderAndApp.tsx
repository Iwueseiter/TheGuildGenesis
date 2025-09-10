import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { config } from "../lib/wagmi";

import { Header } from "../components/Header";
import { ProfileCard } from "../components/ProfileCard";

const queryClient = new QueryClient();

export function Web3ProviderAndApp() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Header />

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Developer Profiles
              </h2>
              <p className="text-lg text-gray-600">
                Discover and certify fellow developers in our peer-to-peer
                network
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Example profiles - in real app, these would come from API */}
              <ProfileCard
                address="0x1234...5678"
                name="Alice Developer"
                description="Full-stack developer passionate about Web3 and Rust"
                badgeCount={5}
                badges={[
                  {
                    id: "1",
                    name: "Rust",
                    description: "Rust programming",
                    issuer: "0xabcd...1234",
                  },
                  {
                    id: "2",
                    name: "React",
                    description: "React development",
                    issuer: "0xefgh...5678",
                  },
                  {
                    id: "3",
                    name: "Web3",
                    description: "Blockchain development",
                    issuer: "0xijkl...9012",
                  },
                ]}
              />

              <ProfileCard
                address="0x9876...5432"
                name="Bob Builder"
                description="Smart contract developer and DeFi enthusiast"
                badgeCount={3}
                badges={[
                  {
                    id: "4",
                    name: "Solidity",
                    description: "Smart contract development",
                    issuer: "0xmnop...3456",
                  },
                  {
                    id: "5",
                    name: "DeFi",
                    description: "Decentralized Finance",
                    issuer: "0xqrst...7890",
                  },
                ]}
              />

              <ProfileCard
                address="0x5555...7777"
                badgeCount={2}
                badges={[
                  {
                    id: "6",
                    name: "TypeScript",
                    description: "TypeScript development",
                    issuer: "0xuvwx...1234",
                  },
                ]}
              />
            </div>
          </main>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
