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

# class VTUHybridInput


## Functions

### VTUHybridInput

```cpp
public void VTUHybridInput(string_view filename)
```


### extension

```cpp
public string_view extension()
```


### read

```cpp
public std::unique_ptr<HybridSolid3D> read(const MeshImpl & impl)
```




