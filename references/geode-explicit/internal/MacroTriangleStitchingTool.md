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

# class MacroTriangleStitchingTool


## Functions

### MacroTriangleStitchingTool

```cpp
public void MacroTriangleStitchingTool(geode::internal::ExtractedTriangulatedSurfaceInfo & data, geode::internal::ExtractedTriangulatedSurfaceInfoBuilder & data_builder)
```


### ~MacroTriangleStitchingTool

```cpp
public void ~MacroTriangleStitchingTool()
```


### apply

```cpp
public void apply()
```




