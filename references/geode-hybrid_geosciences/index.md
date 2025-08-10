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

# namespace geode



## Records

* [HybridGeosciencesPillarLibrary](HybridGeosciencesPillarLibrary.md)
* [LinesInspectionResult](LinesInspectionResult.md)
* [MultiZInspectionResult](MultiZInspectionResult.md)
* [PillarStructuralModelBuilderResult](PillarStructuralModelBuilderResult.md)
* [PillarStructuralModelBuilder](PillarStructuralModelBuilder.md)
* [PillarStructuralModelException](PillarStructuralModelException.md)
* [PillarStructuralModelInspectionResult](PillarStructuralModelInspectionResult.md)
* [PillarStructuralModelOptions](PillarStructuralModelOptions.md)
* [PointsTooFarFromTopographyBoundaryInspectionResult](PointsTooFarFromTopographyBoundaryInspectionResult.md)
* [SurfacesCollectionInspectionResult](SurfacesCollectionInspectionResult.md)


## Functions

### repair_pillar_model_input

```cpp
void repair_pillar_model_input(StructuralModel & model, const PillarStructuralModelInspectionResult & inspection_result)
```




