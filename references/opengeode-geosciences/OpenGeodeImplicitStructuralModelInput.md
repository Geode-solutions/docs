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

# class OpenGeodeImplicitStructuralModelInput


```cpp
Inherits from ImplicitStructuralModelInput
```



## Functions

### OpenGeodeImplicitStructuralModelInput

```cpp
public void OpenGeodeImplicitStructuralModelInput(basic_string_view filename)
```


### extension

```cpp
public basic_string_view extension()
```


### read

```cpp
public ImplicitStructuralModel read()
```


### additional_files

```cpp
public AdditionalFiles additional_files()
```




