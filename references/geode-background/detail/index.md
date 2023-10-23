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

# namespace detail



## Records

* [BackgroundBRepBuilder](BackgroundBRepBuilder.md)
* [BackgroundBRepInserter](BackgroundBRepInserter.md)
* [BackgroundBRepModifier](BackgroundBRepModifier.md)
* [BackgroundBRep](BackgroundBRep.md)
* [BackgroundImpl](BackgroundImpl.md)
* [BackgroundSolidBuilder](BackgroundSolidBuilder.md)
* [BackgroundSolidDecimator](BackgroundSolidDecimator.md)
* [BackgroundSolidInserter](BackgroundSolidInserter.md)
* [BackgroundSolidModifier](BackgroundSolidModifier.md)
* [BackgroundSolidOptimizer](BackgroundSolidOptimizer.md)
* [BackgroundSolidPainter](BackgroundSolidPainter.md)
* [BackgroundSolid](BackgroundSolid.md)
* [BackgroundSurfaceBuilder](BackgroundSurfaceBuilder.md)
* [BackgroundSurfaceInserter](BackgroundSurfaceInserter.md)
* [BackgroundSurfaceModifier](BackgroundSurfaceModifier.md)
* [BackgroundSurfaceOptimizer](BackgroundSurfaceOptimizer.md)
* [BackgroundSurface](BackgroundSurface.md)
* [Background](Background.md)
* [EdgeMacroInfoConfig](EdgeMacroInfoConfig.md)
* [ForbiddenSolidElements](ForbiddenSolidElements.md)
* [ForbiddenSurfaceElements](ForbiddenSurfaceElements.md)
* [MacroEdgeSolidPathFinder](MacroEdgeSolidPathFinder.md)
* [MacroInfo2D](MacroInfo2D.md)
* [MacroInfo3D](MacroInfo3D.md)
* [MacroInfoBuilder2D](MacroInfoBuilder2D.md)
* [MacroInfoBuilder3D](MacroInfoBuilder3D.md)
* [MacroInfoBuilder](MacroInfoBuilder.md)
* [MacroInfo](MacroInfo.md)
* [PointSearchBuilder](PointSearchBuilder.md)
* [PointSearch](PointSearch.md)


## Functions

### repair_background_surface_elements

```cpp
void repair_background_surface_elements(const BackgroundSurface & background, BackgroundSurfaceModifier & modifier, absl::Span<const index_t> triangles, const ForbiddenSurfaceElements & forbidden_elements, absl::Span<const index_t> immuable_vertices)
```


### repair_background_solid_elements

```cpp
void repair_background_solid_elements(const BackgroundSolid & background, BackgroundSolidModifier & modifier, Span tetrahedra, const ForbiddenSolidElements & forbidden_elements, Span immuable_vertices)
```


### decimate_brep

```cpp
void decimate_brep(const BRep & brep, BRepGeometricModifier & modifier, string_view vertex_tag_attribute_name)
```


### decimate_background_brep

```cpp
void decimate_background_brep(const BackgroundBRep & brep, BackgroundBRepModifier & modifier)
```




## Enums

| enum class MacroInfoTag |

--

| empty |
| egal |
| included |
| fixed |
| other |





