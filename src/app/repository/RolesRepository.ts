import { getConnection, Repository } from "typeorm";
import { Roles } from "../entities/Roles";

export class RolesRepository extends Repository<Roles> {

    // Here only use column names from the database
    public async createRole(rolesDetails: Roles) {
        const rolesConnection = getConnection().getRepository(Roles);
        const savedDetails = await rolesConnection.save(rolesDetails);
        return savedDetails;
    }

    public async updateRoleDetails(roleId: string, roleDetails: any) {
        const roleRepo = getConnection().getRepository(Roles);
        const updateRoleDetails = await roleRepo.update({ role_id: roleId, deletedAt: null }, {
            role_name: roleDetails.Role_name ? roleDetails.Role_name : undefined,
            description: roleDetails.description ? roleDetails.description : undefined
        });
        return updateRoleDetails;
    }    

    public async softDeleteRoleById(role_id: string) {
        const roleRepo = getConnection().getRepository(Roles);
        return roleRepo.softDelete({
            role_id
        });
    }

}