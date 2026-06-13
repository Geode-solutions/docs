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

# class FileLicenseChecker


## Functions

### ~FileLicenseChecker

```cpp
public void ~FileLicenseChecker()
```


### FileLicenseChecker

```cpp
protected void FileLicenseChecker(std::string_view license_name)
```


### is_license_file_available

```cpp
protected std::tuple<bool, std::string> is_license_file_available()
```


### acquire_license_file

```cpp
protected void acquire_license_file()
```




