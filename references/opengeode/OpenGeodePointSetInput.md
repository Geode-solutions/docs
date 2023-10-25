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

# class OpenGeodePointSetInput


```cpp
Inherits from PointSetInput<dimension>
```



## Functions

### OpenGeodePointSetInput

```cpp
public void OpenGeodePointSetInput<dimension>(string_view filename)
```


### read

```cpp
public std::unique_ptr<PointSet<dimension> > read(const MeshImpl & impl)
```




