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

# class ModuleLicenseChecker


```cpp
Inherits from FileLicenseChecker, Singleton
```



## Functions

### ModuleLicenseChecker

```cpp
public void ModuleLicenseChecker<name>()
```


### is_license_available

```cpp
public tuple is_license_available()
```


### acquire_license

```cpp
public void acquire_license()
```




