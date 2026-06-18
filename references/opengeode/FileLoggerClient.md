<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class FileLoggerClient


```cpp
Inherits from LoggerClient
```



## Functions

### FileLoggerClient

```cpp
public void FileLoggerClient(const FileLoggerClient & )
```


### FileLoggerClient

```cpp
public void FileLoggerClient(FileLoggerClient && )
```


### operator=

```cpp
public FileLoggerClient & operator=(const FileLoggerClient & )
```


### operator=

```cpp
public FileLoggerClient & operator=(FileLoggerClient && )
```


### FileLoggerClient

```cpp
public void FileLoggerClient(std::string_view file_path)
```


### ~FileLoggerClient

```cpp
public void ~FileLoggerClient()
```


### always_flush

```cpp
public void always_flush()
```


### set_file_path

```cpp
public void set_file_path(std::string_view file_path)
```




