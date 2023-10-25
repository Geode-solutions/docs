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

# class OpenGeodeHorizonsStackOutput


```cpp
Inherits from HorizonsStackOutput<dimension>
```



## Functions

### OpenGeodeHorizonsStackOutput

```cpp
public void OpenGeodeHorizonsStackOutput<dimension>(string_view filename)
```


### extension

```cpp
public string_view extension()
```


### archive_horizons_stack_files

```cpp
public void archive_horizons_stack_files(const ZipFile & zip_writer)
```


### save_horizons_stack_files

```cpp
public void save_horizons_stack_files(const HorizonsStack<dimension> & horizons_stack, string_view directory)
```


### write

```cpp
public void write(const HorizonsStack<dimension> & horizons_stack)
```




