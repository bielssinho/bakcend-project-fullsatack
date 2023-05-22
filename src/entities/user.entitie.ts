import { Column, CreateDateColumn , Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import Contact from './contact.entitie'

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'varchar'})
    name: string

    @Column({type: 'varchar'})
    email: string
    
    @Column({type: 'varchar'})
    cellphone: string
    
    @CreateDateColumn({type: 'date'})
    createAt: string

    @OneToMany(() => Contact, contact => contact.user)
    contacts: Contact[]
}

export default User