
# Step 1: Install dependencies and build the app
FROM node:20-alpine AS builder

# Add at the top of the Dockerfile
ARG BACKEND_URL
ARG NEXT_SHARP_PATH

ENV NEXT_PUBLIC_BACKEND_URL=$BACKEND_URL
ENV NEXT_SHARP_PATH=$NEXT_SHARP_PATH

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy source and build
COPY . .
RUN npm run build

# Step 2: Use a lightweight runtime image
FROM node:20-alpine

WORKDIR /app

# Copy only the built output and production deps
COPY --from=builder /app ./

# Expose Next.js default port
EXPOSE 3000

# Set env to production
ENV NODE_ENV=production

# Start Next.js
CMD ["npm", "start"]
