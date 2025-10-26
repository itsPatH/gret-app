# GRET-APP
<p align="center">
  <a href="#english">🇬🇧 English</a> |
  <a href="#español">🇪🇸 Español</a>
</p>

---

## 🇬🇧 Español <a name="español"></a>
### 🇪🇸 Versión en Español
> **Importante:** Actualmente estoy desarrollando el sistema de agenda, por lo que aún no se muestra en la página web.

## Índice
* [Descripción](#descripción)
* [Stack](#stack)
* [Funcionalidades](#funcionalidades)
* [Uso](#uso)
* [Licencia](#licencia)

## Descripción

**Gret-App** es una app para la gestión de citas y la disponibilidad de la Dra. Gretzalid Meléndez. Transforma una simple *landing page* en un sistema dinámico que permite a los pacientes reservar consultas en tiempo real y proporciona al médico un **Panel de Administración seguro** para gestionar su calendario.

Los principales desafíos abordados fueron implementar un sistema de reservas con **control de concurrencia** y la construcción de una capa administrativa robusta y autenticada.

## Stack

| Capa                 | Tecnología                          | Características Clave Demostradas                                                                 |
| :------------------  | :--------------------------------- | :----------------------------------------------------------------------------------------------- |
| **Front-end**        | **Next.js 14 (App Router), TypeScript** | Uso de frameworks modernos, enrutamiento dinámico para el flujo de reserva y **Tailwind CSS** para diseño responsivo. |
| **Back-end**         | **Node.js con Express**             | Diseño de API RESTful para gestionar *slots* de calendario y lógica de disponibilidad.           |
| **Base de Datos**    | **PostgreSQL**                      | Modelado de datos y consultas complejas para la validación de *slots* de tiempo.                 |
| **Autenticación**    | **JSON Web Tokens (JWT)**           | Implementación de rutas protegidas y autorizadas para el administrador.                          |
| **Despliegue (DevOps)** | **Vercel** (Frontend) y **Render** (Backend/Base de Datos) | Conocimiento demostrado en despliegue en la nube y arquitectura moderna. |



## Funcionalidades

1. **Reserva de Citas Dinámica:** Flujo de usuario para seleccionar ubicación, fecha y *slot* de tiempo disponible.
2. **Panel de Administración Autenticado:** Vista segura que permite al médico listar, filtrar y cambiar el estado de las citas (Ej. Confirmada, Cancelada).
3. **Control de Concurrencia:** Lógica de *Back-end* para garantizar la integridad de la base de datos y evitar la doble reserva de un mismo horario.
4. **Validación de Datos Robusta:** Uso de librerías como Zod/Yup para la validación segura en el cliente y en el servidor.

## Uso

### Prerrequisitos
- Node.js (versión LTS recomendada)
- npm o Yarn
- Acceso a la base de datos (por ejemplo, instancia local de PostgreSQL o URI de conexión)

### Instalación
1. Clonar el repositorio:
```bash
git clone https://github.com/itsPatH/gret-app.git
```
2. Instalar dependencias:
```bash
npm install
# or
yarn install

```
3. Configurar variables de entorno:
```.env
DATABASE_URL="[Your PostgreSQL Connection URI]"
JWT_SECRET="[Your JWT Secret Key]"
```
4. Migración de la Base de Datos (si aplica):

```
npm run migrate
```
5. Ejecutar la aplicación
```
npm run dev
```
5. Abrir http://localhost:3000

## Licencia
- MIT License
---
## 🇬🇧 English <a name="english"></a>
## 🇺🇸 English Version

## 🎯 About the Project
> **Important:** I am currently developing the calendar system so it is not yet displayed on the website.

## Index
* [Description](#description)
* [Stack](#stack)
* [Funcionality](#funcionality)
* [Getting Started](#usage)
* [License](#license)
## Description
**Gret-App** is a complete platform for managing the appointments and availability of Dr. Gretzalid Meléndez. It transforms a simple landing page into a dynamic system allowing patients to book consultations live and providing the physician with a secure **Admin Panel** to manage their calendar.

The main challenges addressed were implementing a booking system with **concurrency control** and building a robust, authenticated administrative layer.


## Stack

| Layer | Technology | Key Features Demonstrated |
| :--- | :--- | :--- |
| **Front-end** | **Next.js 14 (App Router), TypeScript** | Modern framework usage, dynamic routing for booking flow, and **Tailwind CSS** for responsive design. |
| **Back-end** | **Node.js with Express** | RESTful API design for managing calendar slots and availability logic. |
| **Database** | **PostgreSQL** ** | Data modeling, complex querying for time slot validation. |
| **Authentication** | **JSON Web Tokens (JWT)** | Implementation of secured and authorized routes for the administrator. |
| **Deployment** | **Vercel** (Frontend) and **Render** (Backend/Database) | Demonstrated knowledge of cloud deployment and modern architecture. |

## Funcionality

1.  **Dynamic Appointment Booking:** User flow for selecting location, date, and available time slot.
2.  **Authenticated Admin Panel:** A secured view allowing the physician to list, filter, and change the status of appointments (e.g., Confirmed, Canceled).
3.  **Concurrency Control:** Backend logic to ensure database integrity and prevent double-booking of the same time slot.
4.  **Robust Data Validation:** Using a library like Zod/Yup for secure validation on both the client and server.

## Usage
### Prerequisites
- Node.js (LTS version recommended)

- npm or Yarn

- Database access (e.g., local PostgreSQL instance or connection URI)

### Installation
1. Clone the repository:
```bash
git clone https://github.com/itsPatH/gret-app.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```
3. Configure environment variables:
- Create a .env.local file in the root and add Database Connection: 
```
DATABASE_URL="[Your PostgreSQL Connection URI]"
JWT_SECRET="[Your JWT Secret Key]"
```

Database Migration (if applicable):

```
npm run migrate
```
### Running the Application
Start the development server:

```bash
npm run dev
```
Open in your browser http://localhost:3000

## License
Distributed under the MIT License.

---
