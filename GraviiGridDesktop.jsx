import { useState } from "react";

export default function GraviiGridDesktop() {
  const [walletConnected, setWalletConnected] = useState(false);

  return (
    <div style={{
      width: "100vw",
      minHeight: "100vh",
      background: "#0A0A0A",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "60px 40px",
      fontFamily: "system-ui, sans-serif",
    }}>
      {/* Section label */}
      <div style={{
        width: "100%",
        maxWidth: "1200px",
        marginBottom: "20px",
      }}>
        <span style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "10px",
          color: "#4A4A4A",
          letterSpacing: "3px",
          textTransform: "uppercase",
        }}>
          Gravii.io — Grid Section Prototype (Desktop)
        </span>
      </div>

      {/* Grid container */}
      <div style={{
        width: "100%",
        maxWidth: "1200px",
        display: "flex",
        flexDirection: "column",
        gap: "0px",
      }}>

        {/* ─── SECTION DIVIDER: PROFILE ─── */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          padding: "0 4px",
          marginBottom: "16px",
        }}>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "9px",
            color: "#7F9BAA",
            letterSpacing: "3px",
            whiteSpace: "nowrap",
          }}>CODE_001 //</span>
          <div style={{
            flex: 1,
            height: "1px",
            background: "linear-gradient(90deg, rgba(127,155,170,0.3), transparent)",
          }} />
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "9px",
            color: "rgba(127,155,170,0.4)",
            letterSpacing: "2px",
          }}>PROFILE</span>
        </div>

        {/* ═══════════ ROW 1: YOUR PERSONA (full width) ═══════════ */}
        <div style={{
          background: "#111111",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "2rem",
          padding: "40px",
          display: "flex",
          gap: "48px",
          minHeight: "400px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Left — Persona image area */}
          <div style={{
            flex: "0 0 300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
            {/* Blurred persona placeholder */}
            <div style={{
              width: "260px",
              height: "340px",
              borderRadius: "16px",
              background: "linear-gradient(145deg, #1a1a1a 0%, #0f0f0f 100%)",
              border: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Ghost silhouette */}
              <div style={{
                width: "140px",
                height: "200px",
                borderRadius: "12px",
                background: "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                filter: "blur(12px)",
              }} />
              <div style={{
                position: "absolute",
                fontFamily: "'Space Mono', monospace",
                fontSize: "11px",
                color: "rgba(255,255,255,0.15)",
                letterSpacing: "4px",
              }}>
                ? ? ?
              </div>

              {/* Top-left number */}
              <span style={{
                position: "absolute",
                top: "14px",
                left: "16px",
                fontFamily: "'Space Mono', monospace",
                fontSize: "10px",
                color: "rgba(255,255,255,0.15)",
                letterSpacing: "1px",
              }}>01</span>

              {/* Scan line effect */}
              <div style={{
                position: "absolute",
                left: 0,
                right: 0,
                height: "1px",
                background: "rgba(255,255,255,0.06)",
                boxShadow: "0 0 12px rgba(255,255,255,0.03)",
                animation: "scanMove 4s ease-in-out infinite",
                top: "30%",
              }} />

              {/* Identity locked text */}
              <div style={{
                position: "absolute",
                bottom: "20px",
                fontFamily: "'Space Mono', monospace",
                fontSize: "8px",
                color: "#7F9BAA",
                letterSpacing: "4px",
                textTransform: "uppercase",
                animation: "lockBlink 3s ease-in-out infinite",
              }}>
                Identity Locked
              </div>

              {/* Breathing border */}
              <div style={{
                position: "absolute",
                inset: 0,
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.04)",
                animation: "breathe 4s ease-in-out infinite",
                pointerEvents: "none",
              }} />
            </div>
          </div>

          {/* Right — Meta + CTA */}
          <div style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "24px",
          }}>
            {/* Eyebrow */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "10px",
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "3px",
                textTransform: "uppercase",
              }}>Persona Card</span>
              <div style={{
                width: "40px",
                height: "1px",
                background: "rgba(255,255,255,0.1)",
              }} />
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "9px",
                color: "rgba(255,255,255,0.15)",
                letterSpacing: "2px",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "3px 10px",
                borderRadius: "2px",
              }}>GEN 1.0</span>
            </div>

            {/* Title */}
            <div>
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "48px",
                fontWeight: 400,
                color: "#F0EDE6",
                margin: "0 0 8px",
                letterSpacing: "-0.5px",
                lineHeight: 1.1,
              }}>
                Your Persona
              </h2>
              <p style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "13px",
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.7,
                maxWidth: "480px",
                letterSpacing: "0.3px",
              }}>
                Your wallet tells a story.
                <br/>Let us read it for you.
              </p>
            </div>

            {/* Key:Value preview (greyed out) */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              padding: "20px 0",
              borderTop: "1px solid rgba(255,255,255,0.05)",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}>
              {[
                { key: "archetype" },
                { key: "chains" },
                { key: "txs" },
                { key: "style" },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                }}>
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "10px",
                    color: "rgba(255,255,255,0.15)",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    width: "80px",
                    flexShrink: 0,
                  }}>{item.key}</span>
                  <div style={{
                    width: `${100 - i * 15}px`,
                    height: "10px",
                    borderRadius: "2px",
                    background: "rgba(255,255,255,0.06)",
                  }} />
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <button
                onClick={() => setWalletConnected(!walletConnected)}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "12px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#0A0A0A",
                  background: "#F0EDE6",
                  border: "none",
                  padding: "16px 40px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: 700,
                  transition: "all 0.2s",
                }}
              >
                Connect Wallet
              </button>
            {/* Safety reassurance */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "10px",
                color: "rgba(255,255,255,0.2)",
                letterSpacing: "0.5px",
              }}>
                🔒 Read-only · No signatures · No approvals
              </span>
            </div>
            </div>

            {/* Status */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}>
              <div style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: walletConnected ? "#5A7A64" : "#C44B3F",
              }} />
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "9px",
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "1px",
              }}>
                {walletConnected ? "connected" : "offline"}
              </span>
            </div>
          </div>

          {/* Corner decorations */}
          <div style={{
            position: "absolute",
            top: "20px",
            right: "24px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}>
            <div style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: walletConnected ? "#5A7A64" : "#C44B3F",
            }} />
          </div>
        </div>

        {/* ─── SECTION DIVIDER: LOOKUP ─── */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          padding: "0 4px",
          margin: "24px 0 16px",
        }}>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "9px",
            color: "#7F9BAA",
            letterSpacing: "3px",
            whiteSpace: "nowrap",
          }}>CODE_002 //</span>
          <div style={{
            flex: 1,
            height: "1px",
            background: "linear-gradient(90deg, rgba(127,155,170,0.3), transparent)",
          }} />
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "9px",
            color: "rgba(127,155,170,0.4)",
            letterSpacing: "2px",
          }}>LOOKUP</span>
        </div>

        {/* ═══════════ ROW 2: LOOKUP (full width) ═══════════ */}
        <div style={{
          background: "#111111",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "2rem",
          padding: "36px 40px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Top — Title + description */}
          <div>
            <h3 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "28px",
              fontWeight: 400,
              color: "#F0EDE6",
              margin: "0 0 8px",
            }}>
              Lookup
            </h3>
            <p style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "12px",
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.3px",
              margin: "0 0 4px",
            }}>
              Curious about someone?
            </p>
            <p style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "11px",
              color: "rgba(255,255,255,0.2)",
              letterSpacing: "0.5px",
              margin: 0,
            }}>
              Search the ledger. Verify the source. All transactions are final.
            </p>
          </div>

          {/* Search input — full width */}
          <div style={{
            position: "relative",
            width: "100%",
          }}>
            <input
              type="text"
              placeholder="0x address or ENS..."
              readOnly
              style={{
                width: "100%",
                fontFamily: "'Space Mono', monospace",
                fontSize: "13px",
                color: "#F0EDE6",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "10px",
                padding: "16px 52px 16px 20px",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" style={{
              position: "absolute",
              right: "18px",
              top: "50%",
              transform: "translateY(-50%)",
            }}>
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </div>
        </div>

        {/* ─── SECTION DIVIDER: EXPLORE ─── */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          padding: "0 4px",
          margin: "24px 0 16px",
        }}>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "9px",
            color: "#7F9BAA",
            letterSpacing: "3px",
            whiteSpace: "nowrap",
          }}>CODE_003 //</span>
          <div style={{
            flex: 1,
            height: "1px",
            background: "linear-gradient(90deg, rgba(127,155,170,0.3), transparent)",
          }} />
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "9px",
            color: "rgba(127,155,170,0.4)",
            letterSpacing: "2px",
          }}>EXPLORE</span>
        </div>

        {/* ═══════════ ROW 2: MYSPACE + LAUNCHBAY ═══════════ */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
        }}>
          {/* MYSPACE */}
          <div style={{
            background: "#111111",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "2rem",
            padding: "36px",
            minHeight: "280px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
            transition: "border-color 0.3s",
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(196,75,63,0.3)"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
          >
            {/* Top */}
            <div>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "16px",
              }}>
                <div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "36px",
                    fontWeight: 400,
                    color: "#F0EDE6",
                    margin: "0 0 8px",
                    lineHeight: 1.1,
                  }}>
                    Myspace
                  </h3>
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "9px",
                    color: "rgba(255,255,255,0.2)",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}>Exclusive Deals</span>
                </div>
                {/* Arrow */}
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" style={{ marginTop: "4px" }}>
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>

              <p style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "12px",
                color: "rgba(255,255,255,0.3)",
                lineHeight: 1.8,
                maxWidth: "400px",
                letterSpacing: "0.3px",
              }}>
                Deals matched to your profile.
              </p>
            </div>

            {/* Bottom */}
            <div style={{
              borderTop: "1px solid rgba(255,255,255,0.05)",
              paddingTop: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "9px",
                color: "rgba(255,255,255,0.15)",
                letterSpacing: "2px",
              }}>#DEAL-001</span>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "9px",
                color: "#C44B3F",
                letterSpacing: "1.5px",
                border: "1px solid rgba(196,75,63,0.3)",
                padding: "4px 12px",
                borderRadius: "4px",
              }}>COMING SOON</span>
            </div>

            {/* Subtle color accent — left border glow */}
            <div style={{
              position: "absolute",
              top: "30%",
              bottom: "30%",
              left: 0,
              width: "3px",
              background: "linear-gradient(180deg, transparent, rgba(196,75,63,0.3), transparent)",
              borderRadius: "0 2px 2px 0",
            }} />
          </div>

          {/* LAUNCHBAY */}
          <div style={{
            background: "#111111",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "2rem",
            padding: "36px",
            minHeight: "280px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
            transition: "border-color 0.3s",
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(90,122,100,0.3)"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
          >
            {/* Top */}
            <div>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "16px",
              }}>
                <div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "36px",
                    fontWeight: 400,
                    color: "#F0EDE6",
                    margin: "0 0 8px",
                    lineHeight: 1.1,
                  }}>
                    Launchbay
                  </h3>
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "9px",
                    color: "rgba(255,255,255,0.2)",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}>Campaign Hub</span>
                </div>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" style={{ marginTop: "4px" }}>
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>

              <p style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "12px",
                color: "rgba(255,255,255,0.3)",
                lineHeight: 1.8,
                maxWidth: "400px",
                letterSpacing: "0.3px",
              }}>
                See what's live. Join what's next.
              </p>
            </div>

            {/* Bottom */}
            <div style={{
              borderTop: "1px solid rgba(255,255,255,0.05)",
              paddingTop: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {["●","●","●","○","○"].map((d, i) => (
                  <span key={i} style={{
                    fontSize: "7px",
                    color: i < 3 ? "#5A7A64" : "rgba(255,255,255,0.1)",
                  }}>{d}</span>
                ))}
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "9px",
                  color: "rgba(255,255,255,0.25)",
                  letterSpacing: "1px",
                  marginLeft: "4px",
                }}>3 LIVE</span>
              </div>
              <span style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "9px",
                color: "rgba(255,255,255,0.15)",
                letterSpacing: "1px",
              }}>◎</span>
            </div>

            {/* Subtle color accent — left border glow */}
            <div style={{
              position: "absolute",
              top: "30%",
              bottom: "30%",
              left: 0,
              width: "3px",
              background: "linear-gradient(180deg, transparent, rgba(90,122,100,0.3), transparent)",
              borderRadius: "0 2px 2px 0",
            }} />
          </div>
        </div>

        {/* ─── SECTION DIVIDER: WAITLIST ─── */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          padding: "0 4px",
          margin: "24px 0 16px",
        }}>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "9px",
            color: "#7F9BAA",
            letterSpacing: "3px",
            whiteSpace: "nowrap",
          }}>CODE_004 //</span>
          <div style={{
            flex: 1,
            height: "1px",
            background: "linear-gradient(90deg, rgba(127,155,170,0.3), transparent)",
          }} />
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "9px",
            color: "rgba(127,155,170,0.4)",
            letterSpacing: "2px",
          }}>WAITLIST</span>
        </div>

        {/* ═══════════ WAITLIST SECTION (separate) ═══════════ */}
        <div>
          <div style={{
            background: "#0E0E0E",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "2rem",
            padding: "48px 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}>
            <div style={{ textAlign: "center" }}>
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "32px",
                fontWeight: 400,
                color: "#F0EDE6",
                margin: "0 0 8px",
              }}>
                Waitlist
              </h3>
              <div style={{
                width: "40px",
                height: "1px",
                background: "rgba(255,255,255,0.15)",
                margin: "0 auto 12px",
              }} />
              <p style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "11px",
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "0.5px",
              }}>
                Join the revolution. Be the first to experience Gravii.
              </p>
            </div>

            <div style={{
              display: "flex",
              gap: "12px",
              width: "100%",
              maxWidth: "520px",
            }}>
              <input
                type="email"
                placeholder="Enter email..."
                readOnly
                style={{
                  flex: 1,
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "13px",
                  color: "#F0EDE6",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  padding: "16px 20px",
                  outline: "none",
                }}
              />
              <button style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "11px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#0A0A0A",
                background: "#F0EDE6",
                border: "none",
                padding: "16px 32px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: 700,
                whiteSpace: "nowrap",
              }}>
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes scanMove {
          0%, 100% { top: 20%; opacity: 0.3; }
          50% { top: 75%; opacity: 0.8; }
        }
        @keyframes lockBlink {
          0%, 100% { opacity: 0.12; }
          50% { opacity: 0.04; }
        }
        @keyframes breathe {
          0%, 100% { border-color: rgba(255,255,255,0.04); }
          50% { border-color: rgba(255,255,255,0.1); }
        }
      `}</style>
    </div>
  );
}
