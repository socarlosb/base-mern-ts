FROM node

# Create app folder
RUN mkdir -p /app
WORKDIR /app

# Cache npm dependencies
COPY package*.json /app/
RUN npm ci

# Copy application files
COPY . /app

EXPOSE 3000

CMD ["node", "index.js"]
