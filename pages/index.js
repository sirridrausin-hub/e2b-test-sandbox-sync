export default function Home() {
  return (
    <div style={{ 
      padding: '2rem', 
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      color: 'white',
      minHeight: '100vh'
    }}>
      <h1>📚 GitHub Existing Repo Test</h1>
      <p>Repository Type: existing</p>
      <p>Created at: 2025-11-19T12:14:39.484Z</p>
      <p>Sandbox ID: github-existing-1763554479484</p>
      <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
        <h2>✅ GitHub Mode:</h2>
        <p>This pushes to an existing GitHub repository</p>
        <p>Benefits: Organized commits, shared history</p>
      </div>
    </div>
  );
}