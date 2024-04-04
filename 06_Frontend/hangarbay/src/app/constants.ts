export interface FormData {
  field: string; // Field used for API call
  // ... other fields (if needed)
}

export interface InfoItem {
  id: string;
  name: string;
  // Add other properties as needed for your information items
}

// sidebar-item.interface.ts
export interface SidebarItem {
  label: string;
  iconClass: string;
  route: string;
}
