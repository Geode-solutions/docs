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

# class ZipFile


## Functions

### ZipFile

```cpp
public void ZipFile(std::string_view file, std::string_view archive_temp_filename)
```


### ~ZipFile

```cpp
public void ~ZipFile()
```


### archive_files

```cpp
public void archive_files(absl::Span<const std::string_view> files)
```


### archive_file

```cpp
public void archive_file(std::string_view file)
```


### directory

```cpp
public std::string directory()
```


### finalize

```cpp
public void finalize()
```


 Write the archive to its final location. Called by the destructor if not done before, unless an exception is being thrown, in which case the archive is discarded and any existing file is left untouched.

**exception**if the archive cannot be written.



