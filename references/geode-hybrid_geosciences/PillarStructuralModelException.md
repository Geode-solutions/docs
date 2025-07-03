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

# class PillarStructuralModelException


```cpp
Inherits from OpenGeodeDataException
```



## Members

```cpp
public PillarStructuralModelInspectionResult inspection_result

```



## Functions

### PillarStructuralModelException

```cpp
public void PillarStructuralModelException(PillarStructuralModelInspectionResult inspection_result_in, const Args &... message)
```




