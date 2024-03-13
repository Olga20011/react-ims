import React from 'react';
import { AuthProvider } from './AuthContext';
import { ThemeProvider } from './ThemeContext';
import {TenantProvider} from './TenantContext';
import { RoleProvider } from './RoleContext';
import { UserProvider } from './UserContext';
import { PermissionProvider } from './PermissionContext';



const SuperProvider=(props)=>{
  
        return (
            <ThemeProvider>
               <AuthProvider>
               <PermissionProvider>                    
             <RoleProvider>
               <UserProvider>
                <TenantProvider>
                {props.children}
                </TenantProvider>
                </UserProvider>
                     </RoleProvider>
                     </PermissionProvider>
             </AuthProvider>
          </ThemeProvider>                         
        )
}

export default SuperProvider;