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

# class ExtractedEdgedCurveInfoBuilder


```cpp
Inherits from ExtractedMeshInfoBuilder<EdgedCurve3D>
```



## Functions

### ExtractedEdgedCurveInfoBuilder

```cpp
public void ExtractedEdgedCurveInfoBuilder(ExtractedEdgedCurveInfo & extracted_mesh)
```


### add_mesh

```cpp
public void add_mesh(const BackgroundSolid & background_solid, const ExtractedEdgedCurveInfo & other_extracted_mesh)
```




