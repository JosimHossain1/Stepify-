import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Plus,
  ShoppingBasketIcon,
  Star,
  Users,
  User2,
  UserPlus,
  ShieldCheck,
  Slash,
  MessageCircle,
  FileText,
  Clock,
  Truck,
  CheckCircle,
  Ban,
  RotateCcw,
  PlusCircle,
  Boxes,
  Folder,
  FolderOpen,
  Percent,
  LayoutDashboard,
  BarChart,
  FileBarChart2,
} from 'lucide-react';
import Link from 'next/link';

export function AppSidebar() {
  // Menu items.

  // Dashboard
  const dashboards = [
    {
      title: 'Overview',
      url: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'Analytics',
      url: '/dashboard/analytics',
      icon: BarChart,
    },
    {
      title: 'Reports',
      url: '/dashboard/reports',
      icon: FileBarChart2,
    },
  ];

  // Orders
  const orders = [
    { title: 'All Orders', url: '/dashboard/orders', icon: FileText },
    { title: 'Pending', url: '/dashboard/orders/pending', icon: Clock },
    { title: 'Shipped', url: '/dashboard/orders/shipped', icon: Truck },
    {
      title: 'Delivered',
      url: '/dashboard/orders/delivered',
      icon: CheckCircle,
    },
    { title: 'Cancelled', url: '/dashboard/orders/cancelled', icon: Ban },
    { title: 'Refunds', url: '/dashboard/refunds', icon: RotateCcw },
  ];

  // Products
  const products = [
    {
      title: 'All Products',
      url: '/dashboard/all-products',
      icon: ShoppingBasketIcon,
    },
    { title: 'Add Product', url: '/dashboard/add-product', icon: PlusCircle },
    { title: 'Inventory', url: '/dashboard/inventory', icon: Boxes },
    { title: 'Categories', url: '/dashboard/categories', icon: Folder },
    {
      title: 'Sub-Categories',
      url: '/dashboard/sub-categories',
      icon: FolderOpen,
    },
    { title: 'Brands', url: '/dashboard/brands', icon: Calendar },
    { title: 'Product Reviews', url: '/dashboard/reviews', icon: Star },
    {
      title: 'Discounts / Coupons',
      url: '/dashboard/discounts',
      icon: Percent,
    },
  ];

  // Users
  const users = [
    { title: 'All Users', url: '/dashboard/users', icon: Users },
    { title: 'Create User', url: '/dashboard/create-user', icon: UserPlus },
    { title: 'User Roles', url: '/dashboard/roles', icon: ShieldCheck },
    { title: 'Blocked Users', url: '/dashboard/blocked-users', icon: Slash },
    { title: 'User Feedback', url: '/dashboard/feedback', icon: MessageCircle },
  ];

  return (
    <Sidebar side='left' variant='floating' collapsible='icon'>
      {/* Sidebar Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  Select Workspace
                  <ChevronDown className='ml-auto' />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-[--radix-popper-anchor-width]'>
                <DropdownMenuItem>
                  <span>Acme Inc</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Acme Corp.</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent>
        {/* Dashboard Group */}
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus /> <span className='sr-only'>Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {dashboards.map((dashboard) => (
                <SidebarMenuItem key={dashboard.title}>
                  <SidebarMenuButton asChild >
                    <Link href={dashboard.url}>
                      <dashboard.icon />
                      <span>{dashboard.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Orders Group */}
        <SidebarGroup>
          <SidebarGroupLabel>Orders</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus /> <span className='sr-only'>Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {orders.map((order) => (
                <SidebarMenuItem key={order.title}>
                  <SidebarMenuButton asChild >
                    <Link href={order.url}>
                      <order.icon />
                      <span>{order.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Product Group */}
        <SidebarGroup>
          <SidebarGroupLabel>Products</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus /> <span className='sr-only'>Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {products.map((project) => (
                <SidebarMenuItem key={project.title}>
                  <SidebarMenuButton asChild >
                    <Link href={project.url}>
                      <project.icon />
                      <span>{project.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>{' '}
        </SidebarGroup>

        {/* Users Group */}
        <SidebarGroup>
          <SidebarGroupLabel>Users</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus /> <span className='sr-only'>Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {users.map((user) => (
                <SidebarMenuItem key={user.title}>
                  <SidebarMenuButton asChild >
                    <Link href={user.url}>
                      <user.icon />
                      <span>{user.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* End Group */}
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className='ml-auto' />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side='top'
                className='w-[--radix-popper-anchor-width]'
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
