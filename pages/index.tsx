export default function Home() {
  return (
    <div style={{
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f4f8'
    }}>
      <h1 style={{ color: '#333' }}>Welcome to SOCOS Retail</h1>
      <p style={{ color: '#555', maxWidth: '500px', textAlign: 'center' }}>
        Your all-in-one retail management system is ready to be built step-by-step.
      </p>
    </div>
  );
}
