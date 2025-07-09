'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Home,
  LayoutDashboard,
  BarChart2,
  Bot,
  Users,
  Bell,
  FileText,
  ClipboardList,
  Activity,
  Link as LinkIcon,
  Shield,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleSidebar = () => setCollapsed(!collapsed);

  const sections = [
    {
      title: 'Overview',
      items: [
        { icon: <Home size={20} />, label: 'Home', href: '/' },
        { icon: <LayoutDashboard size={20} />, label: 'Dashboard', href: '/dashboard' },
        { icon: <BarChart2 size={20} />, label: 'Analytics', href: '/analytics' },
        { icon: <Bot size={20} />, label: 'AI Assistant', href: '/ai' },
      ],
    },
    {
      title: 'Management',
      items: [
        { icon: <Users size={20} />, label: 'Users', href: '/users' },
        { icon: <Bell size={20} />, label: 'Alerts', href: '/alerts', badge: 3 },
        { icon: <FileText size={20} />, label: 'Reports', href: '/reports' },
        { icon: <ClipboardList size={20} />, label: 'Audit Logs', href: '/audit' },
      ],
    },
    {
      title: 'System',
      items: [
        { icon: <Activity size={20} />, label: 'Monitoring', href: '/monitoring' },
        { icon: <LinkIcon size={20} />, label: 'Integrations', href: '/integrations' },
        { icon: <Shield size={20} />, label: 'Fraud Rules', href: '/fraud-rules' },
        { icon: <Settings size={20} />, label: 'Settings', href: '/settings' },
        
      ],
    },
  ];

  return (
    <div className={`min-h-screen  bg-white border-r flex flex-col transition-all duration-300 fixed ${collapsed ? 'w-14' : 'w-64'}`}>
      {/* Top Section */}
      <div className="flex items-center justify-between p-2 mb-4">
        {!collapsed && (
          <div className="font-bold text-blue-600 text-sm">
            RetailGuard AI
            <div className="text-gray-500 text-xs">Fraud Detection</div>
          </div>
        )}
        <button onClick={toggleSidebar} className="ml-auto p-1 rounded hover:bg-gray-100">
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation Sections */}
      <div className="space-y-6 overflow-y-auto flex-1 px-2">
        {sections.map((section, i) => (
          <div key={i}>
            {!collapsed && (
              <div className="text-xs text-gray-500 uppercase px-2 mb-1">
                {section.title}
              </div>
            )}
            <ul className="space-y-1">
              {section.items.map((item, j) => (
                <li key={j} className="relative">
                  <Link href={item.href}>
                    <div className="group flex items-center px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer">
                      <div className="flex items-center">
                        {item.icon}
                      </div>
                      {!collapsed && <span className="ml-3">{item.label}</span>}
                      {!collapsed && item.badge && (
                        <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                      
                     
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;