# --- Step 1: Build the app ---
FROM node:20-alpine AS builder

ARG BACKEND_URL
ARG NEXT_SHARP_PATH

ENV NEXT_PUBLIC_BACKEND_URL=$BACKEND_URL
ENV NEXT_SHARP_PATH=$NEXT_SHARP_PATH

WORKDIR /app

# Copy only dependency manifests first (for layer caching)
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy source code
COPY . .

# Build the Next.js app
RUN npm run build


# --- Step 2: Create lightweight runtime image ---
FROM node:20-alpine

ENV NODE_ENV=production
WORKDIR /app

# Copy only what's needed from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the default Next.js port
EXPOSE 3000

# Start Next.js server
CMD ["npm", "start"]
