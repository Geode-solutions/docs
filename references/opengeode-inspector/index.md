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



## Namespaces

* [detail](detail/index.md)
* [internal](internal/index.md)


## Records

* [AddInspectors](AddInspectors.md)
* [BRepBlocksTopologyInspectionResult](BRepBlocksTopologyInspectionResult.md)
* [BRepBlocksTopology](BRepBlocksTopology.md)
* [BRepComponentMeshesAdjacency](BRepComponentMeshesAdjacency.md)
* [BRepComponentMeshesDegeneration](BRepComponentMeshesDegeneration.md)
* [BRepComponentMeshesManifold](BRepComponentMeshesManifold.md)
* [BRepComponentMeshesNegativeElements](BRepComponentMeshesNegativeElements.md)
* [BRepCornersTopologyInspectionResult](BRepCornersTopologyInspectionResult.md)
* [BRepCornersTopology](BRepCornersTopology.md)
* [BRepInspectionResult](BRepInspectionResult.md)
* [BRepInspector](BRepInspector.md)
* [BRepLinesTopologyInspectionResult](BRepLinesTopologyInspectionResult.md)
* [BRepLinesTopology](BRepLinesTopology.md)
* [BRepMeshesAdjacencyInspectionResult](BRepMeshesAdjacencyInspectionResult.md)
* [BRepMeshesDegenerationInspectionResult](BRepMeshesDegenerationInspectionResult.md)
* [BRepMeshesInspectionResult](BRepMeshesInspectionResult.md)
* [BRepMeshesInspector](BRepMeshesInspector.md)
* [BRepMeshesManifoldInspectionResult](BRepMeshesManifoldInspectionResult.md)
* [BRepMeshesNegativeElementsInspectionResult](BRepMeshesNegativeElementsInspectionResult.md)
* [BRepNonManifoldEdge](BRepNonManifoldEdge.md)
* [BRepNonManifoldFacet](BRepNonManifoldFacet.md)
* [BRepSurfacesTopologyInspectionResult](BRepSurfacesTopologyInspectionResult.md)
* [BRepSurfacesTopology](BRepSurfacesTopology.md)
* [BRepTopologyInspectionResult](BRepTopologyInspectionResult.md)
* [BRepTopologyInspector](BRepTopologyInspector.md)
* [ComponentMeshVertex](ComponentMeshVertex.md)
* [ComponentMeshesAdjacency](ComponentMeshesAdjacency.md)
* [ComponentMeshesColocation](ComponentMeshesColocation.md)
* [ComponentMeshesDegeneration](ComponentMeshesDegeneration.md)
* [ComponentMeshesManifold](ComponentMeshesManifold.md)
* [EdgedCurveColocation](EdgedCurveColocation.md)
* [EdgedCurveDegeneration](EdgedCurveDegeneration.md)
* [EdgedCurveInspectionResult](EdgedCurveInspectionResult.md)
* [EdgedCurveInspector](EdgedCurveInspector.md)
* [ElementsIntersectionsInspectionResult](ElementsIntersectionsInspectionResult.md)
* [InspectionIssuesMap](InspectionIssuesMap.md)
* [InspectionIssues](InspectionIssues.md)
* [InspectorInspectorLibrary](InspectorInspectorLibrary.md)
* [MeshesColocationInspectionResult](MeshesColocationInspectionResult.md)
* [ModelMeshesIntersections](ModelMeshesIntersections.md)
* [PointSetColocation](PointSetColocation.md)
* [PointSetInspectionResult](PointSetInspectionResult.md)
* [PointSetInspector](PointSetInspector.md)
* [PolygonEdge](PolygonEdge.md)
* [PolyhedronFacet](PolyhedronFacet.md)
* [SectionComponentMeshesAdjacency](SectionComponentMeshesAdjacency.md)
* [SectionComponentMeshesDegeneration](SectionComponentMeshesDegeneration.md)
* [SectionComponentMeshesManifold](SectionComponentMeshesManifold.md)
* [SectionComponentMeshesNegativeElements](SectionComponentMeshesNegativeElements.md)
* [SectionCornersTopologyInspectionResult](SectionCornersTopologyInspectionResult.md)
* [SectionCornersTopology](SectionCornersTopology.md)
* [SectionInspectionResult](SectionInspectionResult.md)
* [SectionInspector](SectionInspector.md)
* [SectionLinesTopologyInspectionResult](SectionLinesTopologyInspectionResult.md)
* [SectionLinesTopology](SectionLinesTopology.md)
* [SectionMeshesAdjacencyInspectionResult](SectionMeshesAdjacencyInspectionResult.md)
* [SectionMeshesDegenerationInspectionResult](SectionMeshesDegenerationInspectionResult.md)
* [SectionMeshesInspectionResult](SectionMeshesInspectionResult.md)
* [SectionMeshesInspector](SectionMeshesInspector.md)
* [SectionMeshesManifoldInspectionResult](SectionMeshesManifoldInspectionResult.md)
* [SectionMeshesNegativeElementsInspectionResult](SectionMeshesNegativeElementsInspectionResult.md)
* [SectionSurfacesTopologyInspectionResult](SectionSurfacesTopologyInspectionResult.md)
* [SectionSurfacesTopology](SectionSurfacesTopology.md)
* [SectionTopologyInspectionResult](SectionTopologyInspectionResult.md)
* [SectionTopologyInspector](SectionTopologyInspector.md)
* [SolidInspectionResult](SolidInspectionResult.md)
* [SolidMeshAdjacency](SolidMeshAdjacency.md)
* [SolidMeshColocation](SolidMeshColocation.md)
* [SolidMeshDegeneration](SolidMeshDegeneration.md)
* [SolidMeshEdgeManifold](SolidMeshEdgeManifold.md)
* [SolidMeshFacetManifold](SolidMeshFacetManifold.md)
* [SolidMeshInspector](SolidMeshInspector.md)
* [SolidMeshNegativeElements](SolidMeshNegativeElements.md)
* [SolidMeshVertexManifold](SolidMeshVertexManifold.md)
* [SurfaceCurveIntersections](SurfaceCurveIntersections.md)
* [SurfaceInspectionResult](SurfaceInspectionResult.md)
* [SurfaceMeshAdjacency](SurfaceMeshAdjacency.md)
* [SurfaceMeshColocation](SurfaceMeshColocation.md)
* [SurfaceMeshDegeneration](SurfaceMeshDegeneration.md)
* [SurfaceMeshEdgeManifold](SurfaceMeshEdgeManifold.md)
* [SurfaceMeshInspector](SurfaceMeshInspector.md)
* [SurfaceMeshIntersections](SurfaceMeshIntersections.md)
* [SurfaceMeshNegativeElements](SurfaceMeshNegativeElements.md)
* [SurfaceMeshVertexManifold](SurfaceMeshVertexManifold.md)
* [UniqueVerticesColocation](UniqueVerticesColocation.md)
* [UniqueVerticesInspectionResult](UniqueVerticesInspectionResult.md)
* [uuid](uuid.md)


