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

# class OpenGeodeEdgedCurveInput


```cpp
Inherits from EdgedCurveInput<dimension>
```



## Functions

### OpenGeodeEdgedCurveInput

```cpp
public void OpenGeodeEdgedCurveInput<dimension>(basic_string_view filename)
```


### additional_files

```cpp
public AdditionalFiles additional_files()
```


### read

```cpp
public std::unique_ptr<EdgedCurve<dimension> > read(const MeshImpl & impl)
```


### object_priority

```cpp
public index_t object_priority()
```


### is_loadable

```cpp
public Percentage is_loadable()
```




