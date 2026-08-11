export async function GET() {
  const body = `# Vertical Mouse Guide\n\n> Evidence-led vertical and ergonomic mouse buying guides.\n\n## Editorial signals\n- Site: https://verticalmouseguide.com\n- About: https://verticalmouseguide.com/about\n- Editorial Policy: https://verticalmouseguide.com/editorial-policy\n- Corrections Policy: https://verticalmouseguide.com/corrections-policy\n- Affiliate Disclosure: https://verticalmouseguide.com/affiliate-disclosure\n- Privacy Policy: https://verticalmouseguide.com/privacy-policy\n- Terms of Service: https://verticalmouseguide.com/terms-of-service\n\n## Contact\n- hello@verticalmouseguide.com\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
