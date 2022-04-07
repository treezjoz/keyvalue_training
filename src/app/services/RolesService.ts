import { plainToClass } from "class-transformer";
import { Roles } from "../entities/Roles";
import { RolesRepository } from "../repository/RolesRepository";
export class RolesService {
    
    constructor(
        private RoleRepository: RolesRepository
    ) {}

    public async createRole(RoleInput: any) {
        const RoleData = plainToClass(Roles, {
            "role_name": RoleInput.name,
            "description": "Sample Role"
        });
        const savedDetails = await this.RoleRepository.createRole(RoleData);
        return savedDetails;
    }

    public async updateRole(roleId: string, roleDetails: any) {
        const updatedRole = await this.RoleRepository.updateRoleDetails(roleId, roleDetails);
        return updatedRole;
    }

    public async deleteRole(roleId: string) {
        return this.RoleRepository.softDeleteRoleById(roleId);
    }
}