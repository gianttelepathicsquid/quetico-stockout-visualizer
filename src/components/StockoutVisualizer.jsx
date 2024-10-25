import React, { useState } from 'react';
import { 
  TrendingDown, 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  BarChart2,
  AlertTriangle,
  CheckCircle,
  Package
} from 'lucide-react';

const StockoutVisualizer = () => {
  const [activeSection, setActiveSection] = useState('risks');
  const [expandedCard, setExpandedCard] = useState(null);

  const risks = [
    {
      id: 'sales',
      icon: TrendingDown,
      title: 'Lost Sales',
      impact: '-45%',
      description: 'Immediate revenue loss from unavailable products'
    },
    {
      id: 'loyalty',
      icon: Users,
      title: 'Customer Loyalty',
      impact: '-32%',
      description: 'Decreased customer retention due to unavailable items'
    },
    {
      id: 'reputation',
      icon: AlertTriangle,
      title: 'Brand Reputation',
      impact: '-28%',
      description: 'Negative impact on brand trust and reputation'
    }
  ];

  const solutions = [
    {
      id: 'tracking',
      icon: Package,
      title: 'Real-Time Inventory',
      impact: '+99.8%',
      description: 'Accurate inventory tracking across all channels'
    },
    {
      id: 'optimization',
      icon: BarChart2,
      title: 'Stock Optimization',
      impact: '+30%',
      description: 'Data-driven inventory management'
    },
    {
      id: 'growth',
      icon: TrendingUp,
      title: 'Business Growth',
      impact: '+30%',
      description: 'Increased e-commerce sales through optimized fulfillment'
    }
  ];

  return (
    <div style={{
      backgroundColor: '#0A192F',
      color: 'white',
      padding: '24px',
      borderRadius: '8px',
      maxWidth: '1024px',
      margin: '0 auto'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '16px' }}>
          Stockout Impact & Solutions
        </h2>
        <p style={{ color: '#94A3B8' }}>
          See how proper 3PL partnership prevents stockouts and drives growth
        </p>
      </div>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '16px', 
        marginBottom: '32px' 
      }}>
        <button
          onClick={() => setActiveSection('risks')}
          style={{
            backgroundColor: activeSection === 'risks' ? '#00B4D8' : '#1E2A3B',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          Stockout Risks
        </button>
        <button
          onClick={() => setActiveSection('solutions')}
          style={{
            backgroundColor: activeSection === 'solutions' ? '#00B4D8' : '#1E2A3B',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          3PL Solutions
        </button>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '24px' 
      }}>
        {(activeSection === 'risks' ? risks : solutions).map((item) => (
          <div
            key={item.id}
            style={{
              backgroundColor: '#1E2A3B',
              padding: '24px',
              borderRadius: '8px',
              cursor: 'pointer',
              transform: expandedCard === item.id ? 'scale(1.02)' : 'scale(1)',
              transition: 'all 0.3s ease',
              border: expandedCard === item.id ? '2px solid #00B4D8' : '2px solid transparent'
            }}
            onClick={() => setExpandedCard(expandedCard === item.id ? null : item.id)}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '16px', 
              marginBottom: '16px' 
            }}>
              <item.icon 
                style={{ 
                  color: activeSection === 'risks' ? '#FF4444' : '#00B4D8',
                  width: '32px',
                  height: '32px'
                }} 
              />
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{item.title}</h3>
            </div>

            <div style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold',
              color: activeSection === 'risks' ? '#FF4444' : '#00B4D8',
              marginBottom: '16px'
            }}>
              {item.impact}
            </div>

            <p style={{ color: '#94A3B8' }}>{item.description}</p>
          </div>
        ))}
      </div>

      {activeSection === 'solutions' && (
        <div style={{
          marginTop: '32px',
          backgroundColor: '#1E2A3B',
          padding: '24px',
          borderRadius: '8px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '16px'
          }}>
            <TrendingUp style={{ color: '#00B4D8', width: '24px', height: '24px' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600' }}>Success Story: LOST Surfing Apparel</h3>
          </div>
          <p style={{ color: '#94A3B8', marginBottom: '16px' }}>
            Through partnership with Quetico's optimized fulfillment solutions, LOST has achieved:
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            marginTop: '16px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#00B4D8', fontSize: '2rem', fontWeight: 'bold' }}>
                30%+
              </div>
              <div style={{ color: '#94A3B8' }}>E-commerce Growth</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#00B4D8', fontSize: '2rem', fontWeight: 'bold' }}>
                99.9%
              </div>
              <div style={{ color: '#94A3B8' }}>Order Accuracy</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StockoutVisualizer;
