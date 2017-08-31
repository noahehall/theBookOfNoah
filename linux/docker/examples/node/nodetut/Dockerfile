# Use an official node runtime as a parent image
# latest LTS version boron of node
FROM node:boron

# Set the working directory to /app
# directory to hold the application code inside the image
WORKDIR /app

# Copy the current directory contents into the container at /app
#ADD . /app

# or copy specific file(s)
# copy file1 file2 etc3 .
COPY package.json .

# run your installation cmds
RUN npm install

# Bundle app source
COPY . .

# Make port available to the world outside this container
EXPOSE 8080

# Define environment variable
ENV NAME World

# Run app when the container launches
CMD [ "npm", "start" ]
