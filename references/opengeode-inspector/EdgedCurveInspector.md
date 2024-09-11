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

# class EdgedCurveInspector


 Class for inspecting an EdgedCurve**extends** **extends** 



```cpp
Inherits from AddInspectors<EdgedCurve<dimension>, EdgedCurveColocation<dimension>, EdgedCurveDegeneration<dimension> >
```



## Functions

### EdgedCurveInspector

```cpp
public void EdgedCurveInspector<dimension>(const EdgedCurveInspector<dimension> & )
```


### operator=

```cpp
public EdgedCurveInspector<dimension> & operator=(const EdgedCurveInspector<dimension> & )
```


### EdgedCurveInspector

```cpp
public void EdgedCurveInspector<dimension>(const EdgedCurve<dimension> & mesh)
```


### inspect_edged_curve

```cpp
public EdgedCurveInspectionResult inspect_edged_curve()
```




# class EdgedCurveInspector


```cpp
Inherits from AddInspectors<EdgedCurve<2U>, EdgedCurveColocation<2U>, EdgedCurveDegeneration<2U> >
```



# class EdgedCurveInspector


```cpp
Inherits from AddInspectors<EdgedCurve<3U>, EdgedCurveColocation<3U>, EdgedCurveDegeneration<3U> >
```



